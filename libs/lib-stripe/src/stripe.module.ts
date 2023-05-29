import { Module } from "@nestjs/common";
import { StripeInvoiceService } from "./invoice.service";

@Module({
  providers: [StripeInvoiceService],
  exports: [StripeInvoiceService]
})
export class StripeModule { }