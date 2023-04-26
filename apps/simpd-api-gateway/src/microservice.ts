import 'dotenv/config';
import {NestFactory} from '@nestjs/core';
import {GatewayModule} from './gateway.module';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';
import {
  GATEWAY_SERVICE_MICROSERVICE_ADDRESS,
  GATEWAY_SERVICE_PACKAGE,
  GATEWAY_SERVICE_PROTO,
} from '@simpd/proto-lib';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    GatewayModule,
    {
      transport: Transport.GRPC,
      options: {
        url: GATEWAY_SERVICE_MICROSERVICE_ADDRESS,
        package: GATEWAY_SERVICE_PACKAGE,
        protoPath: GATEWAY_SERVICE_PROTO,
      },
    }
  );
  await app.listen();
}

bootstrap();
