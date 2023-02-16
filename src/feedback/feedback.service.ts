import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { FeedbackDto } from './feedback.dto';
import { FeedbackEntity } from './feedback.entity/feedback.entity';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(FeedbackEntity)
    private feedbackRepository: Repository<FeedbackEntity>,
  ) {}

  async createMessage(feedback: FeedbackDto) {
    const response = this.feedbackRepository.save(feedback);
    return response;
  }
}
