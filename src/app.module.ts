import { Module } from '@nestjs/common';
import { AppController } from './presentation/controllers/app.controller';
import { AppService } from './infrastructure/services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { TaskModule } from './presentation/modules/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TaskModule
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
