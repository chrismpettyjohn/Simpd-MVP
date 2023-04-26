import {Module} from '@nestjs/common';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {
  SESSION_SERVICE_NAME,
  SESSION_SERVICE_PACKAGE,
  SESSION_SERVICE_PROTO,
} from './session.const';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SESSION_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          package: SESSION_SERVICE_PACKAGE,
          protoPath: SESSION_SERVICE_PROTO,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class SessionClientModule {}
