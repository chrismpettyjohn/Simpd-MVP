import 'dotenv/config';
import {NestFactory} from '@nestjs/core';
import {WsAdapter} from '@nestjs/platform-ws';
import {SessionModule} from './session.module';
import {SESSION_SERVICE_PORT} from '@simpd/api-lib';

async function bootstrap() {
  const app = await NestFactory.create(SessionModule);
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(SESSION_SERVICE_PORT);
}

bootstrap();
