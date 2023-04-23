import {MediaWire} from '../media/Media';
import {Timestamp} from '../utility/Timestamp';

export enum PrivateAgeVerificationReview {
  Pending = 'pending',
  Approved = 'approved',
  Rejected = 'rejected',
}

export interface PrivateAgeVerificationWire {
  id: number;
  userID: number;
  driversLicenseMediaID: MediaWire;
  selfieVerificationMediaID: MediaWire;
  createdAt: Timestamp;
  reviewedAt?: Timestamp;
  reviewStatus: PrivateAgeVerificationReview;
}
