import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {PostRepository} from './post.repository';
import {postEntityToPostWire} from './post.wire';
import {
  SVC_USER_INTERNAL_EVENT_FIND_ONE_BY_ID,
  PostFindOneInput,
  PostWire,
} from '@simpd/lib-client';

@Controller()
export class PostController {
  constructor(private readonly postRepo: PostRepository) {}

  @MessagePattern(SVC_USER_INTERNAL_EVENT_FIND_ONE_BY_ID)
  async postFindOneByID(data: PostFindOneInput): Promise<PostWire> {
    const matchingRole = await this.postRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return postEntityToPostWire(matchingRole);
  }
}
