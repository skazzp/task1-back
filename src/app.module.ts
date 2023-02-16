import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { FeedbackEntity } from './feedback/feedback.entity/feedback.entity';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: 'database_1',
      synchronize: true,
      logging: false,
      entities: [FeedbackEntity],
      migrations: [],
      subscribers: [],
    }),
    FeedbackModule,
  ],
})
export class AppModule {}
