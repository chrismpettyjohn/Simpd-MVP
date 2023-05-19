import {PostEntity} from './post.entity';
import {
  BasePost,
  PostType,
  PostWire,
  PostWithAlbumWire,
  PostWithImageWire,
  PostWithSharedContentWire,
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

  if (postEntity.postType === PostType.SharedContent) {
    return postEntityToPostWithSharedContentWire(postEntity);
  }

  throw new Error('Invalid post type');
}

export function postEntityToBasePost(postEntity: PostEntity): BasePost {
  return {
    id: postEntity.id!,
    type: postEntity.postType,
    profileID: postEntity.profileID,
    profile: {
      id: postEntity.profileID,
    },
  };
}

export function postEntityToPostWithTextWire(
  postEntity: PostEntity<PostWithTextWire, PostType.Text>
): PostWithTextWire {
  return {
    ...postEntityToBasePost(postEntity),
    type: postEntity.postType,
    content: postEntity.postData.content,
  };
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

export function postEntityToPostWithSharedContentWire(
  postEntity: PostEntity<PostWithSharedContentWire, PostType.SharedContent>
): PostWithSharedContentWire {
  return {
    ...postEntityToBasePost(postEntity),
    type: postEntity.postType,
    resourceType: postEntity.postData.resourceType,
    resourceID: postEntity.postData.resourceID,
    caption: postEntity.postData.caption,
  };
}
