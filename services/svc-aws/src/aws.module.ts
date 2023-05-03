import {Module} from '@nestjs/common';
import {AWSResolver} from './aws.resolver';
import {AWSController} from './aws.controller';
import {CommonModule, SessionModule} from '@simpd/lib-api';

@Module({
  imports: [CommonModule, SessionModule],
  providers: [AWSResolver],
  controllers: [AWSController],
})
export class AWSModule {}
