import Stripe from 'stripe';
import {StripeWebhookGuard} from './stripe-webhook.guard';
import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
  UseGuards,
} from '@nestjs/common';
import {StripePaymentMethodService} from './payment-method.service';

@Controller('stripe-webhook')
export class StripeWebhookExternalController {
  constructor(
    private readonly paymentMethodService: StripePaymentMethodService
  ) {}

  @Post('message')
  @UseGuards(StripeWebhookGuard)
  async receiveMessage(@Body() response: any) {
    switch (response.type) {
      case 'payment_method.attached':
        return await this.paymentMethodService.onPaymentMethodAttached(
          response
        );

      default: {
        throw new InternalServerErrorException(
          'Unhandled event type: ' + response.type
        );
      }
    }
  }
}
