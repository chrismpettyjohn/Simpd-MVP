import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {PrivacyRepository} from './privacy.repository';
import {privacyEntityToPrivacyWire} from './privacy.wire';
import {
  PrivacyFindOneInput,
  PrivacyWire,
  SVC_PRIVACY_INTERNAL_EVENT_FIND_ONE_BY_ID,
} from '@simpd/lib-client';

@Controller()
export class PrivacyController {
  constructor(private readonly privacyRepo: PrivacyRepository) {}

  @MessagePattern(SVC_PRIVACY_INTERNAL_EVENT_FIND_ONE_BY_ID)
  async privacyFindOneByID(data: PrivacyFindOneInput): Promise<PrivacyWire> {
    const matchingPrivacy = await this.privacyRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return privacyEntityToPrivacyWire(matchingPrivacy);
  }
}
