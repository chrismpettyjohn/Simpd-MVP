import 'dotenv/config';
import {AWSModule} from './aws.module';
import {bootstrapMicroservice} from '@simpd/lib-api';
import {SVC_AWS_WEB_PORT} from 'libs/lib-client/src/svc-aws/aws.const';

bootstrapMicroservice(AWSModule, SVC_AWS_WEB_PORT);
