import Express from 'express';
import BodyParser from 'body-parser';
import {NATS_ADDRESS} from './constants';
import {ExpressAdapter} from '@nestjs/platform-express';
import {NestApplication, NestFactory} from '@nestjs/core';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';

export async function bootstrapDynamicService(
  module: any,
  port: number,
  queueGroup: string
) {
  const expressApp: Express.Express = Express();

  const app: NestApplication = await NestFactory.create(
    module,
    new ExpressAdapter(expressApp),
    {
      bodyParser: false,
    }
  );

  const rawBodyBuffer = (req: any, res: any, buf: any, encoding: any) => {
    if (buf && buf.length) {
      req.rawBody = buf.toString(encoding || 'utf8');
    }
  };

  app.use(BodyParser.urlencoded({verify: rawBodyBuffer, extended: true}));
  app.use(BodyParser.json({verify: rawBodyBuffer}));

  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    methods: ['GET', 'POST'],
    credentials: true,
  });

  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      servers: [NATS_ADDRESS],
      queue: queueGroup,
    },
  });

  await app.startAllMicroservices();

  await app.init();

  await app.listen(port);
}

export async function bootstrapMicroservice(module: any, port: number) {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    module,
    {
      transport: Transport.NATS,
      options: {
        servers: [NATS_ADDRESS],
      },
    }
  );

  await app.init();
  await app.listen();
}
