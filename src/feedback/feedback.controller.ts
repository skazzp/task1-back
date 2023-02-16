import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { FeedbackDto } from './feedback.dto';
import { FeedbackEntity } from './feedback.entity/feedback.entity';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private service: FeedbackService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() feedback: FeedbackDto) {
    return this.service.createMessage(feedback);
  }
}
