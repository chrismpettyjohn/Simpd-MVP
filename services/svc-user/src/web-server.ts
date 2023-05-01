import 'dotenv/config';
import Express from 'express';
import { readFileSync } from 'fs';
import { UserModule } from './user.module';
import { WsAdapter } from '@nestjs/platform-ws';
import Spdy, { Server, ServerOptions } from 'spdy';
import { ExpressAdapter } from '@nestjs/platform-express';
import { NestApplication, NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import {
  SVC_USER_MICROSERVICE_HOST,
  SVC_USER_MICROSERVICE_PORT,
  SVC_USER_WEB_SERVER_PORT,
} from '@simpd/lib-client';

async function bootstrap() {
  const expressApp: Express.Express = Express();

  const spdyOpts: ServerOptions = {
    key: readFileSync('../../ssl/key.pem'),
    cert: readFileSync('../../ssl/cert.pem'),
  };

  const server: Server = Spdy.createServer(spdyOpts, expressApp);

  const app: NestApplication = await NestFactory.create(
    UserModule,
    new ExpressAdapter(expressApp)
  );

  app.useWebSocketAdapter(new WsAdapter(app));

  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      servers: [
        `nats://${SVC_USER_MICROSERVICE_HOST}:${SVC_USER_MICROSERVICE_PORT}`,
      ],
    },
  });

  await app.init();

  await server.listen(SVC_USER_WEB_SERVER_PORT);
}

bootstrap();
