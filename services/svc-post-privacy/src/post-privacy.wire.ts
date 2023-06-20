import { PrivacyWire } from '@simpd/lib-client';
import { PostPrivacyModel } from './post-privacy.model';

export function privacyWireToPostPrivacyWire(
  privacy: PrivacyWire
): PostPrivacyModel {
  return {
    privacyID: privacy.id,
    postID: privacy.resourceID,
  };
}
