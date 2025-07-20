import { Inject, Injectable } from "@nestjs/common";
import { CreateTaskDto } from "../dto/create-task.dto";
import { Task } from "src/domain/entities/task.entity";
import { AbstractTaskRepository } from "src/domain/repository/task.repository";
import {v4 as uuid} from "uuid"

Injectable()
export class CreateTaskUseCase {
    constructor(
        @Inject(AbstractTaskRepository)
        private readonly taskRepository: AbstractTaskRepository
    ) {}

    async execute(dto: CreateTaskDto): Promise<Task> {
        const task = new Task(uuid(),dto.title, dto.description);
        await this.taskRepository.save(task);
        return task;
    }
}