import 'dotenv/config';
import {NestFactory} from '@nestjs/core';
import {RoleModule} from './role.module';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';
import {
  ROLE_SERVICE_MICROSERVICE_ADDRESS,
  ROLE_SERVICE_PACKAGE,
  ROLE_SERVICE_PROTO,
} from '@simpd/proto-lib';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RoleModule,
    {
      transport: Transport.GRPC,
      options: {
        url: ROLE_SERVICE_MICROSERVICE_ADDRESS,
        package: ROLE_SERVICE_PACKAGE,
        protoPath: ROLE_SERVICE_PROTO,
      },
    }
  );
  await app.listen();
}

bootstrap();
