import 'dotenv/config';
import {NestFactory} from '@nestjs/core';
import {WsAdapter} from '@nestjs/platform-ws';
import {SessionModule} from './session.module';
import {SESSION_SERVICE_WEB_SERVER_PORT} from '@simpd/proto-lib';

async function bootstrap() {
  const app = await NestFactory.create(SessionModule);
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(SESSION_SERVICE_WEB_SERVER_PORT);
}

bootstrap();
