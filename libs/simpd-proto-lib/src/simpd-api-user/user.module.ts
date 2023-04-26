import {Module} from '@nestjs/common';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {
  USER_SERVICE_NAME,
  USER_SERVICE_PACKAGE,
  USER_SERVICE_PROTO,
} from './user.const';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USER_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          package: USER_SERVICE_PACKAGE,
          protoPath: USER_SERVICE_PROTO,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class UserClientModule {}
