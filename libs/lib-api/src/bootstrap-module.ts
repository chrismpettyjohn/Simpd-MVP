import Express from 'express';
import {readFileSync} from 'fs';
import {NATS_ADDRESS} from './constants';
import Spdy, {Server, ServerOptions} from 'spdy';
import {ExpressAdapter} from '@nestjs/platform-express';
import {NestApplication, NestFactory} from '@nestjs/core';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';

export async function bootstrapService(module: any, port: number) {
  const expressApp: Express.Express = Express();

  const spdyOpts: ServerOptions = {
    key: readFileSync('../../ssl/key.pem'),
    cert: readFileSync('../../ssl/cert.pem'),
  };

  const server: Server = Spdy.createServer(spdyOpts, expressApp);

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

  await server.listen(port);
}
