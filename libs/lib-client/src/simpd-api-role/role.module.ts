import {Module} from '@nestjs/common';
import {RoleClientService} from './role-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {
  SVC_ROLE_MICROSERVICE_HOST,
  SVC_ROLE_MICROSERVICE_PORT,
  SVC_ROLE_NAME,
} from './role.const';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SVC_ROLE_NAME,
        transport: Transport.NATS,
        options: {
          servers: [
            `nats://${SVC_ROLE_MICROSERVICE_HOST}:${SVC_ROLE_MICROSERVICE_PORT}`,
          ],
        },
      },
    ]),
  ],
  providers: [RoleClientService],
  exports: [RoleClientService],
})
export class RoleClientModule {}
