import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "src/domain/entities/task.entity";
import { AbstractTaskRepository } from "src/domain/repository/task.repository";
import { Repository } from "typeorm";
import { TaskOrmEntity } from "../orm-entities/task.orm-entity";
import { TaskMapper } from "src/application/mappers/task.mapper";

@Injectable()
export class TaskTypeOrmRepository implements AbstractTaskRepository {

    constructor(
        @InjectRepository(TaskOrmEntity)
        private readonly repository: Repository<TaskOrmEntity>
    ) {}

    async save(task: Task): Promise<void> {
        const ormEntity = TaskMapper.toOrm(task);
        await this.repository.save(ormEntity);
    }

    async findAll(): Promise<Task[]> {
        const taskOrmEntities: TaskOrmEntity[] = await this.repository.find();

        const taskEntities: Task[] = [];

        for (const task of taskOrmEntities) {
            taskEntities.push(TaskMapper.toDomain(task));
        }

        return taskEntities;
    }

    async findById(id: string): Promise<Task | null>{
        const taskOrmEntity:TaskOrmEntity | null = await this.repository.findOne({
            where: {
                id: id
            }
         })
        return taskOrmEntity !== null ? TaskMapper.toDomain(taskOrmEntity) : null;
    }
    
}

