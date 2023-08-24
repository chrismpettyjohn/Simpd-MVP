import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {PrivacyRepository} from './privacy.repository';
import {privacyEntityToPrivacyWire} from './privacy.wire';
import {
  PrivacyCreateOneInput,
  PrivacyFindOneInput,
  PrivacyWire,
  SVC_PRIVACY_INTERNAL_EVENT_CREATE_ONE,
  SVC_PRIVACY_INTERNAL_EVENT_DELETE_ONE,
  SVC_PRIVACY_INTERNAL_EVENT_FIND_ONE,
  SVC_PRIVACY_INTERNAL_EVENT_UPDATE_ONE,
} from '@simpd/lib-client';

@Controller()
export class PrivacyController {
  constructor(private readonly privacyRepo: PrivacyRepository) {}

  @MessagePattern(SVC_PRIVACY_INTERNAL_EVENT_FIND_ONE)
  async privacyFindOneByID(
    filter: PrivacyFindOneInput
  ): Promise<PrivacyWire | null> {
    const matchingPrivacy = await this.privacyRepo.findOne({
      where: {
        serviceKey: filter.serviceKey,
        resourceID: filter.resourceID,
      },
    });
    if (!matchingPrivacy) {
      return null;
    }
    return privacyEntityToPrivacyWire(matchingPrivacy);
  }

  @MessagePattern(SVC_PRIVACY_INTERNAL_EVENT_CREATE_ONE)
  async privacyCreateOne(input: PrivacyCreateOneInput): Promise<PrivacyWire> {
    const newPrivacy = await this.privacyRepo.create({
      serviceKey: input.serviceKey,
      resourceID: input.resourceID,
      policy: input.policy,
    });
    return privacyEntityToPrivacyWire(newPrivacy);
  }

  @MessagePattern(SVC_PRIVACY_INTERNAL_EVENT_UPDATE_ONE)
  async privacyUpdateOne(
    filter: PrivacyFindOneInput,
    input: PrivacyCreateOneInput
  ): Promise<boolean> {
    await this.privacyRepo.update(
      {
        serviceKey: filter.serviceKey,
        resourceID: filter.resourceID,
      },
      {
        resourceID: input.resourceID,
        policy: input.policy,
      }
    );
    return true;
  }

  @MessagePattern(SVC_PRIVACY_INTERNAL_EVENT_DELETE_ONE)
  async privacyDeleteOne(filter: PrivacyFindOneInput): Promise<boolean> {
    await this.privacyRepo.softDelete(filter);
    return true;
  }
}
