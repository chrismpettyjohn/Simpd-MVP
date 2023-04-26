import {Module} from '@nestjs/common';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {
  ROLE_SERVICE_NAME,
  ROLE_SERVICE_PACKAGE,
  ROLE_SERVICE_PROTO,
} from './role.const';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ROLE_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          package: ROLE_SERVICE_PACKAGE,
          protoPath: ROLE_SERVICE_PROTO,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class RoleClientModule {}
