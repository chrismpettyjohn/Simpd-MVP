import {Module} from '@nestjs/common';
import {UserClientService} from './user-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {
  USER_SERVICE_MICROSERVICE_HOST,
  USER_SERVICE_MICROSERVICE_PORT,
  USER_SERVICE_NAME,
} from './user.const';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USER_SERVICE_NAME,
        transport: Transport.NATS,
        options: {
          servers: [
            `nats://${USER_SERVICE_MICROSERVICE_HOST}:${USER_SERVICE_MICROSERVICE_PORT}`,
          ],
        },
      },
    ]),
  ],
  providers: [UserClientService],
  exports: [UserClientService],
})
export class UserClientModule {}
