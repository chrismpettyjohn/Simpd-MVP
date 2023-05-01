import {Module} from '@nestjs/common';
import {ProfileClientService} from './profile-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {
  SVC_PROFILE_MICROSERVICE_HOST,
  SVC_PROFILE_MICROSERVICE_PORT,
  SVC_PROFILE_NAME,
} from './profile.const';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_PROFILE_NAME,
        transport: Transport.NATS,
        options: {
          servers: [
            `nats://${SVC_PROFILE_MICROSERVICE_HOST}:${SVC_PROFILE_MICROSERVICE_PORT}`,
          ],
        },
      },
    ]),
  ],
  providers: [ProfileClientService],
  exports: [ProfileClientService],
})
export class UserClientModule {}
