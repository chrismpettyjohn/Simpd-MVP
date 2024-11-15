import {Module} from '@nestjs/common';
import {
  PaymentMethodClientModule,
  ProfileClientModule,
} from '@simpd/lib-client';
import {PaymentMethodEntity} from './payment-method.entity';
import {PaymentMethodResolver} from './payment-method.resolver';
import {PaymentMethodController} from './payment-method.controller';
import {PaymentMethodRepository} from './payment-method.repository';
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
      entities: [PaymentMethodEntity],
      synchronize: true,
    }),
    PaymentMethodClientModule,
  ],
  providers: [PaymentMethodRepository, PaymentMethodResolver],
  controllers: [PaymentMethodController],
})
export class PaymentMethodModule {}
