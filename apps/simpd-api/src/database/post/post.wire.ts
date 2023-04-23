import {PostEntity} from './post.entity';
import {mediaWire} from '../media/media.wire';
import {postVoteWire} from './post-vote.wire';
import {InternalServerErrorException} from '@nestjs/common';
import {postChoiceWire, postChoiceWithIndicatorWire} from './post-choice.wire';
import {
  ErrorCode,
  MediaAlbumPostWire,
  MediaType,
  PollPostWire,
  PostType,
  PostWire,
  QuizPostWire,
  SinglePhotoPostWire,
  SingleVideoPostWire,
  TextPostWire,
} from '@simpd/types';
import {postReactionWire} from './post-reaction.wire';

export function postWire(postEntity: PostEntity, fileURLs: string[]): PostWire {
  const postTypeToWire: Record<PostType, () => PostWire> = {
    [PostType.Text]: () => textPostWire(postEntity),
    [PostType.SinglePhoto]: () => singlePhotoPostWire(postEntity, fileURLs[0]),
    [PostType.SingleVideo]: () => singleVideoPostWire(postEntity, fileURLs[0]),
    [PostType.MediaAlbum]: () => mediaAlbumPostWire(postEntity, fileURLs),
    [PostType.Poll]: () => pollPostWire(postEntity),
    [PostType.Quiz]: () => quizPostWire(postEntity),
  };
  return postTypeToWire[postEntity.type]();
}

export function textPostWire(postEntity: PostEntity): TextPostWire {
  if (postEntity.type !== PostType.Text) {
    throw new InternalServerErrorException(ErrorCode.PostWireReceivedWrongType);
  }

  return {
    id: postEntity.id!,
    userID: postEntity.userID,
    type: postEntity.type,
    createdAt: postEntity.createdAt,
    updatedAt: postEntity.updatedAt,
    content: postEntity.content,
    reactions: postEntity.reactions!.map(_ => postReactionWire(_)),
  };
}

export function singlePhotoPostWire(
  postEntity: PostEntity,
  photoURL: string
): SinglePhotoPostWire {
  if (postEntity.type !== PostType.SinglePhoto) {
    throw new InternalServerErrorException(ErrorCode.PostWireReceivedWrongType);
  }

  if (postEntity.media?.[0]?.media?.fileType !== MediaType.Photo) {
    throw new InternalServerErrorException(ErrorCode.PostWireMissingMedia);
  }

  return {
    id: postEntity.id!,
    userID: postEntity.userID,
    type: postEntity.type,
    createdAt: postEntity.createdAt,
    updatedAt: postEntity.updatedAt,
    content: postEntity.content,
    photo: mediaWire(postEntity.media[0].media, photoURL),
    reactions: postEntity.reactions!.map(_ => postReactionWire(_)),
  };
}

export function singleVideoPostWire(
  postEntity: PostEntity,
  videoURL: string
): SingleVideoPostWire {
  if (postEntity.type !== PostType.SingleVideo) {
    throw new InternalServerErrorException(ErrorCode.PostWireReceivedWrongType);
  }

  if (postEntity.media?.[0]?.media?.fileType !== MediaType.Video) {
    throw new InternalServerErrorException(ErrorCode.PostWireMissingMedia);
  }

  return {
    id: postEntity.id!,
    userID: postEntity.userID,
    type: postEntity.type,
    createdAt: postEntity.createdAt,
    updatedAt: postEntity.updatedAt,
    content: postEntity.content,
    video: mediaWire(postEntity.media[0].media, videoURL),
    reactions: postEntity.reactions!.map(_ => postReactionWire(_)),
  };
}

export function mediaAlbumPostWire(
  postEntity: PostEntity,
  mediaURLs: string[]
): MediaAlbumPostWire {
  if (postEntity.type !== PostType.MediaAlbum) {
    throw new InternalServerErrorException(ErrorCode.PostWireReceivedWrongType);
  }

  if (postEntity.media?.[0]?.media?.fileType !== MediaType.Video) {
    throw new InternalServerErrorException(ErrorCode.PostWireMissingMedia);
  }

  return {
    id: postEntity.id!,
    userID: postEntity.userID,
    type: postEntity.type,
    createdAt: postEntity.createdAt,
    updatedAt: postEntity.updatedAt,
    content: postEntity.content,
    media: postEntity.media!.map((postMedia, mediaIndex) => ({
      ...postMedia.media!,
      id: postMedia.mediaID,
      fileURL: mediaURLs[mediaIndex]!,
      order: postMedia.order,
    })),
    reactions: postEntity.reactions!.map(_ => postReactionWire(_)),
  };
}

export function quizPostWire(postEntity: PostEntity): QuizPostWire {
  if (postEntity.type !== PostType.Quiz) {
    throw new InternalServerErrorException(ErrorCode.PostWireReceivedWrongType);
  }

  if (!postEntity.choices) {
    throw new InternalServerErrorException(
      ErrorCode.PostWireMissingQuizChoices
    );
  }

  if (!postEntity.votes) {
    throw new InternalServerErrorException(
      ErrorCode.PostWireMissingQuizReactions
    );
  }

  return {
    id: postEntity.id!,
    userID: postEntity.userID,
    type: postEntity.type,
    createdAt: postEntity.createdAt,
    updatedAt: postEntity.updatedAt,
    content: postEntity.content,
    choices: postEntity.choices!.map(_ => postChoiceWithIndicatorWire(_)),
    votes: postEntity.votes!.map(_ => postVoteWire(_)),
    reactions: postEntity.reactions!.map(_ => postReactionWire(_)),
  };
}

export function pollPostWire(postEntity: PostEntity): PollPostWire {
  if (postEntity.type !== PostType.Poll) {
    throw new InternalServerErrorException(ErrorCode.PostWireReceivedWrongType);
  }

  if (!postEntity.choices) {
    throw new InternalServerErrorException(
      ErrorCode.PostWireMissingPollChoices
    );
  }

  if (!postEntity.votes) {
    throw new InternalServerErrorException(
      ErrorCode.PostWireMissingPollReactions
    );
  }

  return {
    id: postEntity.id!,
    userID: postEntity.userID,
    type: postEntity.type,
    createdAt: postEntity.createdAt,
    updatedAt: postEntity.updatedAt,
    content: postEntity.content,
    choices: postEntity.choices!.map(_ => postChoiceWire(_)),
    votes: postEntity.votes!.map(_ => postVoteWire(_)),
    reactions: postEntity.reactions!.map(_ => postReactionWire(_)),
  };
}
