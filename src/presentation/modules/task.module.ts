import { Module } from "@nestjs/common";
import { TaskController } from "../controllers/task.controller";
import { TaskService } from "src/infrastructure/services/task.service";
import { CreateTaskUseCase } from "src/application/use-cases/create-task.use-case";
import { TaskTypeOrmRepository } from "src/infrastructure/repositories/task.repository";
import { AbstractTaskRepository } from "src/domain/repository/task.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "src/domain/entities/task.entity";

 @Module({
   imports: [TypeOrmModule.forFeature([Task])],
   controllers: [TaskController],
   providers: [
     TaskService,
     CreateTaskUseCase,
     TaskTypeOrmRepository,
     {
       provide: AbstractTaskRepository,
       useClass: TaskTypeOrmRepository,
     },
   ],
 })
 export class TaskModule {}