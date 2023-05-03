import { Inject } from '@nestjs/common';
import { SVC_AWS_NAME } from './aws.const';

export const AWSClient = () => Inject(SVC_AWS_NAME);
