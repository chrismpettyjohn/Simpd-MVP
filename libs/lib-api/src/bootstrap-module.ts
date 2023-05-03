import Express from 'express';
import {NATS_ADDRESS} from './constants';
import {ExpressAdapter} from '@nestjs/platform-express';
import {NestApplication, NestFactory} from '@nestjs/core';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';

export async function bootstrapDynamicService(module: any, port: number) {
  const expressApp: Express.Express = Express();

  const app: NestApplication = await NestFactory.create(
    module,
    new ExpressAdapter(expressApp)
  );

  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      servers: [NATS_ADDRESS],
    },
  });

  await app.startAllMicroservices();

  await app.init();

  await app.listen(port);
}

export async function bootstrapMicroservice(module: any, port: number) {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    module,
    {
      transport: Transport.NATS,
      options: {
        servers: [NATS_ADDRESS],
      },
    }
  );

  await app.init();
  await app.listen();
}
