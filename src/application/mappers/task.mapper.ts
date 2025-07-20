import { Task } from "src/domain/entities/task.entity";
import { TaskStatus } from "src/domain/value-objects/task-status.vo";
import { TaskOrmEntity } from "src/infrastructure/orm-entities/task.orm-entity";


export class TaskMapper {
    
    static toDomain(ormEntity: TaskOrmEntity): Task {
        return new Task(
            ormEntity.id,
            ormEntity.title,
            ormEntity.description,
            TaskStatus.fromValue(ormEntity.status)
        );
    }

    static toOrm(domainEntity: Task): TaskOrmEntity {
        const ormEntity =  new TaskOrmEntity();
        ormEntity.id = domainEntity.id;
        ormEntity.title = domainEntity.title;
        ormEntity.description = domainEntity.description;
        ormEntity.status = domainEntity.Status.value;

        return ormEntity;
    }
}