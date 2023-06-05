import {Module} from '@nestjs/common';
import {ProfileClientModule} from '@simpd/lib-client';
import {PaymentMethodEntity} from './payment-method.entity';
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
  providers: [],
  controllers: [],
})
export class PaymentMethodModule {}
