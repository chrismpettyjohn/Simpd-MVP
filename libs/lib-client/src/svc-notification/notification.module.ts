import {Module} from '@nestjs/common';
import {NATS_ADDRESS} from '../constants';
import {SVC_NOTIFICATION_NAME} from './notification.const';
import {NotificationClientService} from './notification-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_NOTIFICATION_NAME,
        transport: Transport.NATS,
        options: {
          servers: [NATS_ADDRESS],
        },
      },
    ]),
  ],
  providers: [NotificationClientService],
  exports: [NotificationClientService],
})
export class NotificationClientModule {}
