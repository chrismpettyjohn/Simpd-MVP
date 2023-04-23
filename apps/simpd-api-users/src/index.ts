import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { WsAdapter } from '@nestjs/platform-ws';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  // @ts-ignore
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(process.env.PORT!);
}

bootstrap();
