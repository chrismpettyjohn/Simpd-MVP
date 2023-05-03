import 'dotenv/config';
import { AWSModule } from './aws.module';
import { bootstrapService } from '@simpd/lib-api';
import { SVC_AWS_WEB_PORT } from 'libs/lib-client/src/svc-aws/aws.const';

bootstrapService(AWSModule, SVC_AWS_WEB_PORT);
