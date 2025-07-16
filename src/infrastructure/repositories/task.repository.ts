import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "src/domain/entities/task.entity";
import { AbstractTaskRepository } from "src/domain/repository/task.repository";
import { Repository } from "typeorm";

@Injectable()
export class TaskTypeOrmRepository implements AbstractTaskRepository {

    constructor(
        @InjectRepository(Task)
        private readonly repository: Repository<Task>
    ) {}
    async save(task: Task): Promise<Task> {
        return await this.repository.save(task);
    }
}