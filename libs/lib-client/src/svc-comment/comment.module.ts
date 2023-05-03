import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_COMMENT_NAME} from './comment.const';
import {CommentClientService} from './comment-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_COMMENT_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [CommentClientService],
  exports: [CommentClientService],
})
export class CommentClientModule {}
