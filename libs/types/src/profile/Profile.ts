import {Timestamp} from '../utility/Timestamp';
import {MediaWire} from '..';

export enum ProfileType {
  Creator = 'creator',
  Subscriber = 'subscriber',
}

export interface ProfileWire {
  id: number;
  userID: number;
  username: string;
  displayName: string;
  biography: string;
  location: string;
  websiteURL: string;
  profilePicture?: MediaWire;
  coverPicture?: MediaWire;
  type: ProfileType;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  lastOnlineAt: Timestamp;
}

export const exampleProfileWire: ProfileWire = {
  id: 1,
  userID: 1,
  username: '',
  displayName: '',
  biography: '',
  location: '',
  websiteURL: '',
  profilePicture: undefined,
  coverPicture: undefined,
  type: ProfileType.Creator,
  createdAt: '',
  updatedAt: '',
  lastOnlineAt: '',
};
