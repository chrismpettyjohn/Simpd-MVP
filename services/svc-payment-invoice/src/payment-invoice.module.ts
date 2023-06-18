import {Module} from '@nestjs/common';
import {
  PaymentInvoiceClientModule,
  ProfileClientModule,
} from '@simpd/lib-client';
import {PaymentInvoiceEntity} from './payment-invoice.entity';
import {PaymentInvoiceResolver} from './payment-invoice.resolver';
import {PaymentInvoiceRepository} from './payment-invoice.repository';
import {PaymentInvoiceController} from './payment-invoice.controller';
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
    GraphQLModule.forRoot(),
    DatabaseModule.forRoot({
      entities: [PaymentInvoiceEntity],
      synchronize: true,
    }),
    PaymentInvoiceClientModule,
  ],
  providers: [PaymentInvoiceResolver, PaymentInvoiceRepository],
  controllers: [PaymentInvoiceController],
})
export class PaymentInvoiceModule {}
