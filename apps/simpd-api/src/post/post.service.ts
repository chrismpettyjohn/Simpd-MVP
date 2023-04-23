import {AWSS3Service} from '../aws/aws-s3.service';
import {getTimestamp} from '../common/get-timestamp';
import {PostEntity} from '../database/post/post.entity';
import {ErrorCode, PostType, PostWire} from '@simpd/types';
import {QuizPostChoiceDTO} from './quiz-post/quiz-post.dto';
import {PollPostChoiceDTO} from './poll-post/poll-post.dto';
import {PostChoiceRepository} from '../database/post/post-choice.repository';
import {PostVoteEntity} from '../database/post/post-vote.entity';
import {PostVoteRepository} from '../database/post/post-vote.repository';
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import {
  mediaAlbumPostWire,
  pollPostWire,
  quizPostWire,
  singlePhotoPostWire,
  textPostWire,
} from '../database/post/post.wire';

@Injectable()
export class PostService {
  constructor(
    private readonly awsS3Service: AWSS3Service,
    private readonly postChoiceRepo: PostChoiceRepository,
    private readonly postVoteRepo: PostVoteRepository
  ) {}

  userOwnsPost(post: PostEntity, userID: number) {
    if (post.userID !== userID) {
      throw new ForbiddenException(ErrorCode.ResourceAccessDenied);
    }
  }

  userOwnsPostReaction(postReaction: PostVoteEntity, userID: number) {
    if (postReaction.userID !== userID) {
      throw new ForbiddenException(ErrorCode.ResourceAccessDenied);
    }
  }

  postCanHaveVotes(post: PostEntity) {
    const acceptedPostTypes: PostType[] = [PostType.Quiz, PostType.Poll];
    if (!acceptedPostTypes.includes(post.type)) {
      throw new BadRequestException(ErrorCode.PostCannotHaveReactions);
    }
  }

  postCanHaveChoices(post: PostEntity) {
    const acceptedPostTypes: PostType[] = [PostType.Quiz, PostType.Poll];
    if (!acceptedPostTypes.includes(post.type)) {
      throw new BadRequestException(ErrorCode.PostCannotHaveReactions);
    }
  }
  userCanAccessPost(post: PostEntity, userID: number, isFatal = true) {
    // TODO: Implement post privacy settings
    return true;
  }

  async getWireForPost(post: PostEntity): Promise<PostWire> {
    if (post.type === PostType.Text) {
      return textPostWire(post);
    }

    if (post.type === PostType.Poll) {
      return pollPostWire(post);
    }

    if (post.type === PostType.Quiz) {
      return quizPostWire(post);
    }

    if (post.type === PostType.SinglePhoto) {
      const photoMedia = post?.media?.[0]?.media;

      if (!photoMedia) {
        throw new InternalServerErrorException(ErrorCode.PostWireMissingMedia);
      }

      const photoURL = await this.awsS3Service.getObjectURL(photoMedia.s3Key);

      return singlePhotoPostWire(post, photoURL);
    }

    if (post.type === PostType.SingleVideo) {
      const videoMedia = post?.media?.[0]?.media;

      if (!videoMedia) {
        throw new InternalServerErrorException(ErrorCode.PostWireMissingMedia);
      }

      const videoURL = await this.awsS3Service.getObjectURL(videoMedia.s3Key);

      return singlePhotoPostWire(post, videoURL);
    }

    if (post.type === PostType.MediaAlbum) {
      const fileURLs = await Promise.all(
        post.media!.map(postMedia => {
          return this.awsS3Service.getObjectURL(postMedia.media!.s3Key);
        })
      );

      return mediaAlbumPostWire(post, fileURLs);
    }

    throw new InternalServerErrorException(ErrorCode.PostInvalidType);
  }

  async updateChoicesForPost(
    post: PostEntity,
    choices: Array<QuizPostChoiceDTO | PollPostChoiceDTO>
  ): Promise<void> {
    const existingChoiceIDs: number[] = post.choices!.map(_ => _.id!);

    for (const choice of choices) {
      if (existingChoiceIDs.includes(choice.id!)) {
        await this.postChoiceRepo.update({id: choice.id!}, choice);
        return;
      }

      await this.postChoiceRepo.create({
        postID: post.id!,
        ...choice,
      });
    }

    const deletedChoiceIDs = existingChoiceIDs.filter(
      _ => !choices.find(choice => choice.id === _)
    );

    for (const deletedChoice of deletedChoiceIDs) {
      await this.postChoiceRepo.delete({id: deletedChoice});
    }
  }

  async createOrUpdatePostVoteForPostAndUser(
    post: PostEntity,
    userID: number,
    choiceID: number
  ): Promise<void> {
    const existingReaction = post.votes!.find(_ => _.userID === userID);

    if (existingReaction?.postChoiceID === choiceID) {
      return;
    }

    if (!post.choices!.find(_ => _.id === choiceID)) {
      throw new BadRequestException(
        ErrorCode.PostChoiceReactionHasInvalidChoiceSelected
      );
    }

    if (existingReaction) {
      await this.postVoteRepo.update(
        {id: existingReaction.id!},
        {postChoiceID: choiceID}
      );
      return;
    }

    await this.postVoteRepo.create({
      userID,
      postID: post.id!,
      postChoiceID: choiceID,
      createdAt: getTimestamp(),
    });
  }
}
