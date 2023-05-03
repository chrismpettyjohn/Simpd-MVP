import {MediaEntity} from './media.entity';
import {
  BaseMedia,
  MediaType,
  MediaWire,
  MediaWithTextWire,
} from '@simpd/lib-client';

export function mediaEntityToMediaWire(mediaEntity: MediaEntity): MediaWire {
  if (mediaEntity.mediaType === MediaType.Text) {
    return mediaEntityToMediaWithTextWire(mediaEntity);
  }

  throw new Error('Invalid media type');
}

export function mediaEntityToBaseMedia(mediaEntity: MediaEntity): BaseMedia {
  return {
    id: mediaEntity.id!,
    type: mediaEntity.mediaType,
    profileID: mediaEntity.profileID,
  };
}

export function mediaEntityToMediaWithTextWire(
  mediaEntity: MediaEntity
): MediaWithTextWire {
  return {
    ...mediaEntityToBaseMedia(mediaEntity),
    content: mediaEntity.mediaData.content,
  };
}
