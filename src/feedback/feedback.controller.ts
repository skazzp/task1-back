import { Controller, Post, Body } from '@nestjs/common';
import { FeedbackEntity } from './feedback.entity/feedback.entity';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private service: FeedbackService) {}

  @Post()
  create(@Body() feedback: FeedbackEntity) {
    return this.service.createMessage(feedback);
  }
}
