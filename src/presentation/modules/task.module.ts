import { Module } from "@nestjs/common";
import { TaskController } from "../controllers/task.controller";
import { TaskService } from "src/infrastructure/services/task.service";
import { CreateTaskUseCase } from "src/application/use-cases/create-task.use-case";
import { TaskTypeOrmRepository } from "src/infrastructure/repositories/task.repository";
import { AbstractTaskRepository } from "src/domain/repository/task.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskOrmEntity } from "src/infrastructure/orm-entities/task.orm-entity";
import { FindAllTasksUseCase } from "src/application/use-cases/find-all-tasks.use-case";

 @Module({
   imports: [TypeOrmModule.forFeature([TaskOrmEntity])],
   controllers: [TaskController],
   providers: [
     TaskService,
     CreateTaskUseCase,
     FindAllTasksUseCase,
     TaskTypeOrmRepository,
     {
       provide: AbstractTaskRepository,
       useClass: TaskTypeOrmRepository,
     },
   ],
 })
 export class TaskModule {}