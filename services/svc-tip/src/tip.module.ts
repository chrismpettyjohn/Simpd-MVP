import {Module} from '@nestjs/common';
import {TipEntity} from './tip.entity';
import {TipService} from './tip.service';
import {TipResolver} from './tip.resolver';
import {TipRepository} from './tip.repository';
import {TipController} from './tip.controller';
import {
  PaymentInvoiceClientModule,
  ProfileClientModule,
} from '@simpd/lib-client';
import {
  GraphQLModule,
  DatabaseModule,
  CommonModule,
  SessionModule,
} from '@simpd/lib-api';

@Module({
  imports: [
    CommonModule,
    SessionModule,
    ProfileClientModule,
    PaymentInvoiceClientModule,
    GraphQLModule.forRoot(),
    DatabaseModule.forRoot({
      entities: [TipEntity],
      synchronize: true,
    }),
  ],
  providers: [TipRepository, TipResolver, TipService],
  controllers: [TipController],
})
export class TipModule {}
