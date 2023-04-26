import 'dotenv/config';
import {NestFactory} from '@nestjs/core';
import {WsAdapter} from '@nestjs/platform-ws';
import {GatewayModule} from './gateway.module';
import {GATEWAY_SERVICE_WEB_SERVER_PORT} from '@simpd/proto-lib';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(GATEWAY_SERVICE_WEB_SERVER_PORT);
}

bootstrap();
