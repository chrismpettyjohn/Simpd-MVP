import 'dotenv/config';
import Express from 'express';
import { readFileSync } from 'fs';
import Spdy, { Server, ServerOptions } from 'spdy';
import { SessionServiceModule } from './session.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import { NestApplication, NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import {
  SESSION_SERVICE_MICROSERVICE_HOST,
  SESSION_SERVICE_MICROSERVICE_PORT,
  SESSION_SERVICE_WEB_SERVER_PORT,
  SESSION_SERVICE_NAME,
} from '@simpd/lib-client';

async function bootstrap() {
  const expressApp: Express.Express = Express();

  const spdyOpts: ServerOptions = {
    key: readFileSync('../../ssl/key.pem'),
    cert: readFileSync('../../ssl/cert.pem'),
  };

  const server: Server = Spdy.createServer(spdyOpts, expressApp);

  const app: NestApplication = await NestFactory.create(
    SessionServiceModule,
    new ExpressAdapter(expressApp)
  );

  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      name: SESSION_SERVICE_NAME,
      servers: [
        `nats://${SESSION_SERVICE_MICROSERVICE_HOST}:${SESSION_SERVICE_MICROSERVICE_PORT}`,
      ],
    },
  });

  await app.init();

  await server.listen(SESSION_SERVICE_WEB_SERVER_PORT);
}

bootstrap();
