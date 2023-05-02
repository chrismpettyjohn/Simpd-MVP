import {PostWire} from '@simpd/lib-client';
import {PostEntity} from './post.entity';

export function postEntityToPostWire(postEntity: PostEntity): PostWire {
  return {
    id: postEntity.id!,
    userID: postEntity.userID,
  };
}
