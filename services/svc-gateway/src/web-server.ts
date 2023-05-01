import 'dotenv/config';
import Express from 'express';
import {readFileSync} from 'fs';
import {WsAdapter} from '@nestjs/platform-ws';
import {GatewayModule} from './gateway.module';
import Spdy, {Server, ServerOptions} from 'spdy';
import {ExpressAdapter} from '@nestjs/platform-express';
import {NestApplication, NestFactory} from '@nestjs/core';
import {SVC_GATEWAY_WEB_SERVER_PORT} from '@simpd/client-lib';

async function bootstrap() {
  const expressApp: Express.Express = Express();

  const spdyOpts: ServerOptions = {
    key: readFileSync('../../ssl/key.pem'),
    cert: readFileSync('../../ssl/cert.pem'),
  };

  const server: Server = Spdy.createServer(spdyOpts, expressApp);

  const app: NestApplication = await NestFactory.create(
    GatewayModule,
    new ExpressAdapter(expressApp)
  );

  app.useWebSocketAdapter(new WsAdapter(app));

  await app.init();

  await server.listen(SVC_GATEWAY_WEB_SERVER_PORT);
}

bootstrap();
