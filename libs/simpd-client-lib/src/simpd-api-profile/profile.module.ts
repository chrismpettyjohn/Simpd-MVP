import {Module} from '@nestjs/common';
import {UserClientService} from './profile-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {
  SVC_USER_MICROSERVICE_HOST,
  SVC_USER_MICROSERVICE_PORT,
  SVC_USER_NAME,
} from './profile.const';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_USER_NAME,
        transport: Transport.NATS,
        options: {
          servers: [
            `nats://${SVC_USER_MICROSERVICE_HOST}:${SVC_USER_MICROSERVICE_PORT}`,
          ],
        },
      },
    ]),
  ],
  providers: [UserClientService],
  exports: [UserClientService],
})
export class UserClientModule {}
