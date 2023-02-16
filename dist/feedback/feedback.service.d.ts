import { Repository } from 'typeorm/repository/Repository';
import { FeedbackEntity } from './feedback.entity/feedback.entity';
export declare class FeedbackService {
    private feedbackRepository;
    constructor(feedbackRepository: Repository<FeedbackEntity>);
    createMessage(feedback: FeedbackEntity): Promise<void>;
}
