import {MediaEntity} from './media.entity';
import {MediaWire} from '@simpd/types';

export function mediaWire(
  mediaEntity: MediaEntity,
  fileURL: string
): MediaWire {
  return {
    fileURL,
    id: mediaEntity.id!,
    userID: mediaEntity.userID,
    fileName: mediaEntity.fileName,
    fileDesc: mediaEntity.fileDesc,
    fileType: mediaEntity.fileType,
    fileSize: mediaEntity.fileSize,
    fileLabel: mediaEntity.fileLabel,
    createdAt: mediaEntity.createdAt,
  };
}
