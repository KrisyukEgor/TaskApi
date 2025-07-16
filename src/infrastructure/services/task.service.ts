import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "src/application/dto/create-task.dto";
import { CreateTaskUseCase } from "src/application/use-cases/create-task.use-case";
import { Task } from "src/domain/entities/task.entity";

@Injectable()
export class TaskService {
    constructor(private readonly createTaskUseCase: CreateTaskUseCase) {}

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.createTaskUseCase.execute(createTaskDto);
    }
}