import 'dotenv/config';
import {NestFactory} from '@nestjs/core';
import {UserModule} from './user.module';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';
import {
  USER_SERVICE_MICROSERVICE_ADDRESS,
  USER_SERVICE_PACKAGE,
  USER_SERVICE_PROTO,
} from '@simpd/proto-lib';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserModule,
    {
      transport: Transport.GRPC,
      options: {
        url: USER_SERVICE_MICROSERVICE_ADDRESS,
        package: USER_SERVICE_PACKAGE,
        protoPath: USER_SERVICE_PROTO,
      },
    }
  );
  await app.listen();
}

bootstrap();
