import 'dotenv/config';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { RoleModule } from './role.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(RoleModule, {
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join(__dirname, 'hero/hero.proto'),
    },
  });
  await app.listen();
}

bootstrap();
