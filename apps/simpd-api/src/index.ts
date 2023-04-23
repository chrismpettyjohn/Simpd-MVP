import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { WsAdapter } from '@nestjs/platform-ws';
import { SimpdModule } from './simpd.module';

async function bootstrap() {
  const app = await NestFactory.create(SimpdModule);
  // @ts-ignore
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(process.env.PORT!);
}

bootstrap();
