import { lastValueFrom } from 'rxjs';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AWSFindOneInput, AWSWire } from './aws-client.types';
import {
  SVC_AWS_INTERNAL_EVENT_FIND_ONE_BY_ID,
  SVC_AWS_NAME,
} from './aws.const';

@Injectable()
export class AWSClientService {
  constructor(@Inject(SVC_AWS_NAME) private client: ClientProxy) { }

  async findOneByID({ id }: AWSFindOneInput): Promise<AWSWire> {
    const matchingAWS$ = this.client.send(
      SVC_AWS_INTERNAL_EVENT_FIND_ONE_BY_ID,
      { id }
    );
    return await lastValueFrom(matchingAWS$);
  }
}
