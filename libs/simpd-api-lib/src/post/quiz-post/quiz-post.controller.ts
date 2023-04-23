import {PostService} from '../post.service';
import {QuizPostPipe} from './quiz-post.pipe';
import {PostType, QuizPostWire} from '@simpd/types';
import {getTimestamp} from '../../common/get-timestamp';
import {PostEntity} from '../../database/post/post.entity';
import {quizPostWire} from '../../database/post/post.wire';
import {HasSession} from '../../session/has-session.decorator';
import {GetSession} from '../../session/get-session.decorator';
import {PostRepository} from '../../database/post/post.repository';
import {SessionEntity} from '../../database/session/session.entity';
import {CreateQuizPostDTO, UpdateQuizPostDTO} from './quiz-post.dto';
import {Body, Controller, Param, Patch, Post} from '@nestjs/common';

@Controller('posts/quiz')
@HasSession()
export class QuizPostController {
  constructor(
    private readonly postService: PostService,
    private readonly postRepo: PostRepository
  ) {}

  @Post()
  async createQuizPost(
    @Body() createQuizPostDTO: CreateQuizPostDTO,
    @GetSession() session: SessionEntity
  ): Promise<QuizPostWire> {
    const newQuizPost = await this.postRepo.create({
      userID: session.userID,
      profileID: session.profileID,
      type: PostType.Quiz,
      content: createQuizPostDTO.content,
      createdAt: getTimestamp(),
      updatedAt: getTimestamp(),
    });
    await this.postService.updateChoicesForPost(
      newQuizPost,
      createQuizPostDTO.choices
    );

    const quizPostWithChoices = await this.postRepo.findOneOrFail({
      id: newQuizPost.id!,
    });

    return quizPostWire(quizPostWithChoices);
  }
  @Patch(':postID')
  async updateQuizPostByID(
    @Param('postID', QuizPostPipe) post: PostEntity,
    @GetSession() session: SessionEntity,
    @Body() updateQuizPostDTO: UpdateQuizPostDTO
  ): Promise<void> {
    this.postService.userOwnsPost(post, session.userID);
    await this.postRepo.update(
      {id: post.id!},
      {content: updateQuizPostDTO.content}
    );

    if (updateQuizPostDTO.choices) {
      await this.postService.updateChoicesForPost(
        post,
        updateQuizPostDTO.choices
      );
    }
  }
}
