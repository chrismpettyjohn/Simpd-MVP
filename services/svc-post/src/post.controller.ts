import {Controller} from '@nestjs/common';
import {PostRepository} from './post.repository';
import {postEntityToPostWire} from './post.wire';
import {MessagePattern} from '@nestjs/microservices';
import {PostFindOneInput, PostWire} from '@simpd/lib-client';
import {SVC_POST_INTERNAL_EVENT_FIND_ONE_BY_ID} from 'libs/lib-client/src/svc-post/post.const';

@Controller()
export class PostController {
  constructor(private readonly postRepo: PostRepository<any>) {}

  @MessagePattern(SVC_POST_INTERNAL_EVENT_FIND_ONE_BY_ID)
  async postFindOneByID(data: PostFindOneInput): Promise<PostWire> {
    const matchingRole = await this.postRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return postEntityToPostWire(matchingRole);
  }
}
