import 'dotenv/config';
import {NestFactory} from '@nestjs/core';
import {SessionModule} from './session.module';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';
import {SESSION_SERVICE_PACKAGE, SESSION_SERVICE_PROTO} from '@simpd/api-lib';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SessionModule,
    {
      transport: Transport.GRPC,
      options: {
        package: SESSION_SERVICE_PACKAGE,
        protoPath: SESSION_SERVICE_PROTO,
      },
    }
  );
  await app.listen();
}

bootstrap();
