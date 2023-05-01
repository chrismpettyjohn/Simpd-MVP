import {Module} from '@nestjs/common';
import {RoleClientService} from './role-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {
  ROLE_SERVICE_MICROSERVICE_HOST,
  ROLE_SERVICE_MICROSERVICE_PORT,
  ROLE_SERVICE_NAME,
} from './role.const';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ROLE_SERVICE_NAME,
        transport: Transport.NATS,
        options: {
          servers: [
            `nats://${ROLE_SERVICE_MICROSERVICE_HOST}:${ROLE_SERVICE_MICROSERVICE_PORT}`,
          ],
        },
      },
    ]),
  ],
  providers: [RoleClientService],
  exports: [RoleClientService],
})
export class RoleClientModule {}
