import {Module} from '@nestjs/common';
import {ProfileClientModule} from '@simpd/lib-client';
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
      entities: [],
      synchronize: true,
    }),
  ],
  providers: [],
  controllers: [],
})
export class PaymentInvoiceModule {}
