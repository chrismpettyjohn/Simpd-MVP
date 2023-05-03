import {MediaEntity} from './media.entity';
import {MediaWire} from '@simpd/lib-client';

export function mediaEntityToMediaWire(mediaEntity: MediaEntity): MediaWire {
  return {
    id: mediaEntity.id!,
    type: mediaEntity.mediaType,
    profileID: mediaEntity.profileID,
    details: {
      sizeInBytes: mediaEntity.mediaDetails.sizeInBytes,
      originalFileName: mediaEntity.mediaDetails.originalFileName,
    },
    location: {
      awsS3Key: mediaEntity.mediaLocation.awsS3Key,
      awsS3Bucket: mediaEntity.mediaLocation.awsS3Bucket,
    },
  };
}
