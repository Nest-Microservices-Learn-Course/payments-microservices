import { Controller, Get, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-payment-session')
  createPaymentSession() {
    return 'Payment session created';
  }

  @Get('success')
  success() {
    return { ok: true, message: 'payment successful' };
  }

  @Get('canceled')
  cancel() {
    return { ok: false, message: 'payment cancelled' };
  }

  @Post('webhook')
  stripeWebhook() {
    return 'stripe webhook';
  }
}
