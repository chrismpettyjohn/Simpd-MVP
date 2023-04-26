import 'dotenv/config';
import {NestFactory} from '@nestjs/core';
import {UserModule} from './user.module';
import {WsAdapter} from '@nestjs/platform-ws';
import {USER_SERVICE_WEB_SERVER_PORT} from '@simpd/proto-lib';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(USER_SERVICE_WEB_SERVER_PORT);
}

bootstrap();
