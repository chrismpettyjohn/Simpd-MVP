import {Module} from '@nestjs/common';
import {ProfileClientModule} from '@simpd/lib-client';
import {PaymentMethodEntity} from './payment-method.entity';
import {PaymentMethodService} from './payment-method.service';
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
  ],
  providers: [PaymentMethodRepository, PaymentMethodService],
  controllers: [PaymentMethodController],
})
export class PaymentMethodModule {}
