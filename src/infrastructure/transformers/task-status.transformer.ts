import { TaskStatus } from "src/domain/value-objects/task-status.vo";
import { ValueTransformer } from "typeorm";
import { TaskStatusValue } from 'src/domain/enum/task-status.enum';

export const TaskStatusTransformer: ValueTransformer = {

    to: (entity: TaskStatus) => {
        return entity ? entity.value : null;
    },
    from: (value: TaskStatusValue) => {     
        return value ? TaskStatus.fromValue(value) : null;
    }

}