import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from 'ormconfig';
import { TaskManagementModule } from './task-management/task-management.module';
import { RecipientsManagementModule } from './recipients-management/recipients-management.module';
import { CampaignModule } from './campaign/campaign.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig),TaskManagementModule,  RecipientsManagementModule, CampaignModule, FeedbacksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

