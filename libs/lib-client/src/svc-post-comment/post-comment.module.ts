import { Module } from '@nestjs/common';
import { NATS_ADDRESS } from '../constants';
import { SVC_POST_COMMENT_NAME } from './post-comment.const';
import { PostCommentClientService } from './post-comment-client.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_POST_COMMENT_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [PostCommentClientService],
  exports: [PostCommentClientService],
})
export class PostCommentClientModule { }
