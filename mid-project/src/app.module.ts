import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from 'ormconfig';
import { TaskManagementModule } from './task-management/task-management.module';

@Module({
  imports: [TaskManagementModule, TypeOrmModule.forRoot(ormConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}

