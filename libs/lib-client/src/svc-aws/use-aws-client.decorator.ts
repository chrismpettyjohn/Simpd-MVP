import { Inject } from '@nestjs/common';
import { SVC_AWS_NAME } from './aws.const';
import { ClientProxy } from '@nestjs/microservices';

export const UseAWSClient: () => ClientProxy = () =>
  Inject(SVC_AWS_NAME) as any;
