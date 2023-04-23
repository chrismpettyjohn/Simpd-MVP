import {Timestamp} from '../utility/Timestamp';
import {exampleMediaWire, MediaWire} from '../media/Media';

export interface PrivateIdentityWire {
  id: number;
  userID: number;
  fullName: string;
  driversLicenseMediaID: MediaWire;
  selfieVerificationMediaID: MediaWire;
  createdAt: Timestamp;
  verifiedAt?: Timestamp;
}

export const examplePrivateIdentityWire: PrivateIdentityWire = {
  id: 1,
  userID: 1,
  fullName: '',
  driversLicenseMediaID: exampleMediaWire,
  selfieVerificationMediaID: exampleMediaWire,
  createdAt: '',
  verifiedAt: undefined,
};
