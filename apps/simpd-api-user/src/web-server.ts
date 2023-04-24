import 'dotenv/config';
import {NestFactory} from '@nestjs/core';
import {UserModule} from './user.module';
import {WsAdapter} from '@nestjs/platform-ws';
import {USER_SERVICE_PORT} from '@simpd/api-lib';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(USER_SERVICE_PORT);
}

bootstrap();
