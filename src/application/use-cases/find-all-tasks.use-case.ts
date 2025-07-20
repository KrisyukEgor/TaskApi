import { Injectable } from "@nestjs/common";
import { Task } from "src/domain/entities/task.entity";
import { AbstractTaskRepository } from "src/domain/repository/task.repository";

@Injectable()
export class FindAllTasksUseCase {
    constructor(private readonly repo: AbstractTaskRepository) {}

    async execute(): Promise<Task[]> {
        return this.repo.findAll();
    }
}