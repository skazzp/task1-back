import { FeedbackEntity } from './feedback.entity/feedback.entity';
import { FeedbackService } from './feedback.service';
export declare class FeedbackController {
    private service;
    constructor(service: FeedbackService);
    create(feedback: FeedbackEntity): Promise<void>;
}
