import {PrivacyWire} from '@simpd/lib-client';
import {PrivacyPolicyEntity} from './privacy-policy.entity';

export function privacyEntityToPrivacyWire(
  PrivacyEntity: PrivacyPolicyEntity
): PrivacyWire {
  return {
    id: PrivacyEntity.id!,
    key: PrivacyEntity.key,
    name: PrivacyEntity.name,
    description: PrivacyEntity.description,
  };
}
