import {Module} from '@nestjs/common';
import {AWSService} from './aws.service';
import {AWSController} from './aws.controller';
import {CommonModule, SessionModule} from '@simpd/lib-api';

@Module({
  imports: [CommonModule, SessionModule],
  providers: [AWSService],
  controllers: [AWSController],
})
export class AWSModule {}
