import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';
import {PaymentMethodEntity} from './payment-method.entity';

@Injectable()
export class PaymentMethodRepository extends BaseRepository<PaymentMethodEntity> {
  constructor(
    @InjectRepository(PaymentMethodEntity)
    paymentMethodRepo: Repository<PaymentMethodEntity>
  ) {
    super(paymentMethodRepo);
  }
}
