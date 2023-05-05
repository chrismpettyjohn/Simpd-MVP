import {PostEntity} from './post.entity';
import {
  BasePost,
  PostType,
  PostWire,
  PostWithAlbumWire,
  PostWithImageWire,
  PostWithTextWire,
  PostWithVideoWire,
} from '@simpd/lib-client';

export function postEntityToPostWire(
  postEntity: PostEntity<any, any>
): PostWire {
  if (postEntity.postType === PostType.Text) {
    return postEntityToPostWithTextWire(postEntity);
  }

  if (postEntity.postType === PostType.Image) {
    return postEntityToPostWithImageWire(postEntity);
  }

  if (postEntity.postType === PostType.Video) {
    return postEntityToPostWithImageWire(postEntity);
  }

  if (postEntity.postType === PostType.Album) {
    return postEntityToPostWithAlbumWire(postEntity);
  }

  throw new Error('Invalid post type');
}

export function postEntityToBasePost(
  postEntity: PostEntity
): Omit<BasePost, 'type'> {
  return {
    id: postEntity.id!,
    profileID: postEntity.profileID,
  };
}

export function postEntityToPostWithTextWire(
  postEntity: PostEntity<PostWithTextWire, PostType.Text>
): PostWithTextWire {
  return {
    ...postEntityToBasePost(postEntity),
    content: postEntity.postData.content,
  } as any;
}

export function postEntityToPostWithImageWire(
  postEntity: PostEntity<PostWithImageWire, PostType.Image>
): PostWithImageWire {
  return {
    ...postEntityToBasePost(postEntity),
    type: postEntity.postType,
    mediaID: postEntity.postData.mediaID,
    caption: postEntity.postData.caption,
  };
}

export function postEntityToPostWithVideoWire(
  postEntity: PostEntity<PostWithVideoWire, PostType.Video>
): PostWithVideoWire {
  return {
    ...postEntityToBasePost(postEntity),
    type: postEntity.postType,
    mediaID: postEntity.postData.mediaID,
    caption: postEntity.postData.caption,
  };
}

export function postEntityToPostWithAlbumWire(
  postEntity: PostEntity<PostWithAlbumWire, PostType.Album>
): PostWithAlbumWire {
  return {
    ...postEntityToBasePost(postEntity),
    type: postEntity.postType,
    mediaIDs: postEntity.postData.mediaIDs,
    caption: postEntity.postData.caption,
  };
}
