import gql from "graphql-tag";
import { MEDIA_FRAGMENT, MediaFragment } from "./media.fragment";

export const PROFILE_FRAGMENT = gql`
  ${MEDIA_FRAGMENT}
  fragment ProfileFragment on ProfileModel {
    id
    userID
    username
    displayName
    biography
    location
    websiteURL
    wishlistURL
    coverPhotoMediaID
    coverPhoto {
      ...MediaFragment
    }
    profilePictureMediaID
    profilePicture {
      ...MediaFragment
    }
  }
`

export interface ProfileFragment {
  id: number;
  userID: number;
  username: string;
  displayName: string;
  biography: string;
  location: string;
  websiteURL: string;
  wishlistURL: string;
  coverPhotoMediaID?: number;
  coverPhoto?: MediaFragment;
  profilePictureMediaID?: number;
  profilePicture?: MediaFragment;
}