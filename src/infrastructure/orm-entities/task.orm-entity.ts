import { TaskStatusValue } from "src/domain/enum/task-status.enum";
import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class TaskOrmEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column({nullable: true})
    description?: string;

    @Column({
        type: "enum",
        enum: TaskStatusValue,
        default: TaskStatusValue.OPEN
    })
    status: TaskStatusValue;
}