import {Module} from '@nestjs/common';
import {FormEntity} from './form.entity';
import {FormResolver} from './form.resolver';
import {FormController} from './form.controller';
import {FormRepository} from './form.repository';
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
    GraphQLModule.forRoot(),
    DatabaseModule.forRoot({
      entities: [FormEntity],
      synchronize: true,
    }),
  ],
  providers: [FormRepository, FormResolver],
  controllers: [FormController],
})
export class FormModule {}
