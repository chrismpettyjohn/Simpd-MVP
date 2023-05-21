import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_BOOKMARK_NAME} from './bookmark.const';
import {BookmarkClientService} from './bookmark-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_BOOKMARK_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [BookmarkClientService],
  exports: [BookmarkClientService],
})
export class BookmarkClientModule {}
