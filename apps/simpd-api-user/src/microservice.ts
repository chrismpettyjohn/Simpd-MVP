import 'dotenv/config';
import {NestFactory} from '@nestjs/core';
import {UserModule} from './user.module';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';
import {USER_SERVICE_PACKAGE, USER_SERVICE_PROTO} from '@simpd/api-lib';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserModule,
    {
      transport: Transport.GRPC,
      options: {
        package: USER_SERVICE_PACKAGE,
        protoPath: USER_SERVICE_PROTO,
      },
    }
  );
  await app.listen();
}

bootstrap();
