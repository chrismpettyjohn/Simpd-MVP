import {PrivacyWire} from '@simpd/lib-client';
import {PrivacyPolicyEntity} from './privacy-policy.entity';

export function privacyEntityToPrivacyWire(
  privacyEntity: PrivacyPolicyEntity
): PrivacyWire {
  return {
    id: privacyEntity.id!,
    serviceKey: privacyEntity.serviceKey,
    resourceID: privacyEntity.resourceID,
    name: privacyEntity.name,
    description: privacyEntity.description,
    policy: privacyEntity.policy,
  };
}
