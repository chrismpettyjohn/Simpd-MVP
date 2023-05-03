import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AWSRepository } from './aws.repository';
import { profileEntityToAWSWire } from './aws.wire';
import {
  AWSFindOneInput,
  AWSWire,
  SVC_AWS_INTERNAL_EVENT_FIND_ONE_BY_ID,
} from '@simpd/lib-client';

@Controller()
export class AWSController {
  constructor(private readonly profileRepo: AWSRepository) { }

  @MessagePattern(SVC_AWS_INTERNAL_EVENT_FIND_ONE_BY_ID)
  async profileFindOneByID(data: AWSFindOneInput): Promise<AWSWire> {
    const matchingRole = await this.profileRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return profileEntityToAWSWire(matchingRole);
  }
}
