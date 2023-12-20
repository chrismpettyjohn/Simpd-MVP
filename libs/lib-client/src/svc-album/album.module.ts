import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_ALBUM_NAME} from './album.const';
import {AlbumClientService} from './album-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_ALBUM_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [AlbumClientService],
  exports: [AlbumClientService],
})
export class AlbumClientModule {}
