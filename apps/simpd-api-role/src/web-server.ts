import 'dotenv/config';
import {NestFactory} from '@nestjs/core';
import {RoleModule} from './role.module';
import {WsAdapter} from '@nestjs/platform-ws';
import {ROLE_SERVICE_WEB_SERVER_PORT} from '@simpd/proto-lib';

async function bootstrap() {
  const app = await NestFactory.create(RoleModule);
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(ROLE_SERVICE_WEB_SERVER_PORT);
}

bootstrap();
