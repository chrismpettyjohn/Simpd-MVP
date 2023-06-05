import {StripeWebhookGuard} from './stripe-webhook.guard';
import {Body, Controller, Post, UseGuards} from '@nestjs/common';

@Controller('stripe-webhook')
export class StripeWebhookExternalController {
  @Post('message')
  @UseGuards(StripeWebhookGuard)
  async receiveMessage(@Body() response: object) {
    console.log('receiveMessage: ', response);
  }
}
