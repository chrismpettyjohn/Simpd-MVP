import 'dotenv/config';
import Express from 'express';
import {readFileSync} from 'fs';
import {RoleModule} from './role.module';
import {WsAdapter} from '@nestjs/platform-ws';
import Spdy, {Server, ServerOptions} from 'spdy';
import {ExpressAdapter} from '@nestjs/platform-express';
import {NestApplication, NestFactory} from '@nestjs/core';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';
import {
  ROLE_SERVICE_MICROSERVICE_HOST,
  ROLE_SERVICE_MICROSERVICE_PORT,
  ROLE_SERVICE_WEB_SERVER_PORT,
} from '@simpd/client-lib';

async function bootstrap() {
  const expressApp: Express.Express = Express();

  const spdyOpts: ServerOptions = {
    key: readFileSync('../../ssl/key.pem'),
    cert: readFileSync('../../ssl/cert.pem'),
  };

  const server: Server = Spdy.createServer(spdyOpts, expressApp);

  const app: NestApplication = await NestFactory.create(
    RoleModule,
    new ExpressAdapter(expressApp)
  );

  app.useWebSocketAdapter(new WsAdapter(app));

  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      servers: [
        `nats://${ROLE_SERVICE_MICROSERVICE_HOST}:${ROLE_SERVICE_MICROSERVICE_PORT}`,
      ],
    },
  });

  await app.startAllMicroservices();

  await server.listen(ROLE_SERVICE_WEB_SERVER_PORT);
}

bootstrap();
