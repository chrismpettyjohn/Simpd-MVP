import {PostEntity} from './post.entity';
import {
  BasePost,
  PostType,
  PostWire,
  PostWithTextWire,
} from '@simpd/lib-client';

export function postEntityToPostWire(postEntity: PostEntity): PostWire {
  if (postEntity.postType === PostType.Text) {
    return postEntityToPostWithTextWire(postEntity);
  }

  throw new Error('Invalid post type');
}

export function postEntityToBasePost(postEntity: PostEntity): BasePost {
  return {
    id: postEntity.id!,
    type: postEntity.postType,
    userID: postEntity.userID,
  };
}

export function postEntityToPostWithTextWire(
  postEntity: PostEntity
): PostWithTextWire {
  return {
    ...postEntityToBasePost(postEntity),
    content: postEntity.postData.content,
  };
}
