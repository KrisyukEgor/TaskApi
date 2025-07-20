import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "src/application/dto/create-task.dto";
import { CreateTaskUseCase } from "src/application/use-cases/create-task.use-case";
import { FindAllTasksUseCase } from "src/application/use-cases/find-all-tasks.use-case";
import { Task } from "src/domain/entities/task.entity";

@Injectable()
export class TaskService {
    constructor(
        private readonly createTaskUC: CreateTaskUseCase,
        private readonly findAllTasksUC: FindAllTasksUseCase
    ) {}

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.createTaskUC.execute(createTaskDto);
    }

    async findAll(): Promise<Task[]> {
        return this.findAllTasksUC.execute();
    }
}