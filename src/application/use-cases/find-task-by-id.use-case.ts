import { Injectable } from "@nestjs/common";
import { Task } from "src/domain/entities/task.entity";
import { AbstractTaskRepository } from "src/domain/repository/task.repository";

@Injectable()
export class FindTaskByIdUseCase {
    constructor(private readonly repo:AbstractTaskRepository) {}

    async execute(id: string): Promise<Task | null> {
        return this.repo.findById(id);
    }
}