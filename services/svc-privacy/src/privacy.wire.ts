import {PrivacyWire} from '@simpd/lib-client';
import {PrivacyEntity} from './privacy.entity';

export function PrivacyEntityToPrivacyWire(
  PrivacyEntity: PrivacyEntity
): PrivacyWire {
  return {
    id: PrivacyEntity.id!,
    key: PrivacyEntity.key,
    name: PrivacyEntity.name,
    description: PrivacyEntity.description,
  };
}
