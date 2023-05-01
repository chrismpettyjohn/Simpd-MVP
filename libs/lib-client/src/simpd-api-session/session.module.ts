import {Module} from '@nestjs/common';
import {SessionClientService} from './session-client.service';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {
  SESSION_SERVICE_MICROSERVICE_HOST,
  SESSION_SERVICE_MICROSERVICE_PORT,
  SESSION_SERVICE_NAME,
} from './session.const';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SESSION_SERVICE_NAME,
        transport: Transport.NATS,
        options: {
          servers: [
            `nats://${SESSION_SERVICE_MICROSERVICE_HOST}:${SESSION_SERVICE_MICROSERVICE_PORT}`,
          ],
        },
      },
    ]),
  ],
  providers: [SessionClientService],
  exports: [SessionClientService],
})
export class SessionClientModule {}
