import {ProfileWire} from '@simpd/types';
import {ProfileEntity} from './profile.entity';
import {mediaWire} from '../media/media.wire';

export function profileWire(
  profileEntity: ProfileEntity,
  profilePictureURL?: string,
  coverPictureURL?: string
): ProfileWire {
  return {
    id: profileEntity.id!,
    userID: profileEntity.userID,
    username: profileEntity.username,
    displayName: profileEntity.displayName,
    biography: profileEntity.biography,
    location: profileEntity.location,
    websiteURL: profileEntity.websiteURL,
    profilePicture: profileEntity.profilePicture
      ? mediaWire(profileEntity.profilePicture, profilePictureURL!)
      : undefined,
    coverPicture: profileEntity.coverPicture
      ? mediaWire(profileEntity.coverPicture, coverPictureURL!)
      : undefined,
    type: profileEntity.type,
    createdAt: '',
    updatedAt: '',
    lastOnlineAt: '',
  };
}
