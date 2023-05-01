import 'dotenv/config';
import {NestFactory} from '@nestjs/core';
import {GatewayModule} from './gateway.module';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';
import {
  SVC_GATEWAY_MICROSERVICE_ADDRESS,
  SVC_GATEWAY_PACKAGE,
  SVC_GATEWAY_PROTO,
} from '@simpd/proto-lib';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    GatewayModule,
    {
      transport: Transport.GRPC,
      options: {
        url: SVC_GATEWAY_MICROSERVICE_ADDRESS,
        package: SVC_GATEWAY_PACKAGE,
        protoPath: SVC_GATEWAY_PROTO,
      },
    }
  );
  await app.listen();
}

bootstrap();
