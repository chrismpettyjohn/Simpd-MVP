import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';
import {PaymentInvoiceEntity} from './payment-invoice.entity';

@Injectable()
export class PaymentInvoiceRepository extends BaseRepository<PaymentInvoiceEntity> {
  constructor(
    @InjectRepository(PaymentInvoiceEntity)
    paymentInvoiceRepo: Repository<PaymentInvoiceEntity>
  ) {
    super(paymentInvoiceRepo);
  }
}
