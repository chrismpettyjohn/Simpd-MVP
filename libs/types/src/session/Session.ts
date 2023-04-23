import {Timestamp} from '../utility/Timestamp';
import {exampleProfileWire, ProfileWire} from '../profile/Profile';
import {examplePrivateUserWire, PrivateUserWire} from '../user/PrivateUser';

export interface SessionWire {
  id: number;
  userID: number;
  privateUser: PrivateUserWire;
  activeProfile: ProfileWire;
  profiles: ProfileWire[];
  createdAt: Timestamp;
  endedAt: Timestamp;
  ipAddress: string;
  geoLocation: string;
  operatingSystem: string;
}

export const exampleSessionWire: SessionWire = {
  id: 1,
  userID: examplePrivateUserWire.id,
  privateUser: examplePrivateUserWire,
  activeProfile: exampleProfileWire,
  profiles: [exampleProfileWire],
  createdAt: '',
  endedAt: '',
  ipAddress: '',
  geoLocation: '',
  operatingSystem: '',
};
