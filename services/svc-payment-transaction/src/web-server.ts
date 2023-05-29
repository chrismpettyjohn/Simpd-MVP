import 'dotenv/config';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {PaymentInvoiceModule} from './payment-invoice.module';
import {SVC_PAYMENT_TRANSACTION_WEB_PORT} from '@simpd/lib-client';

bootstrapDynamicService(PaymentInvoiceModule, SVC_PAYMENT_TRANSACTION_WEB_PORT);
