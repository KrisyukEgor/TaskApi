import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "../value-objects/task-status.vo";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column({nullable: true})
    description?: string;
    
    @Column('varchar')
    private status: TaskStatus;

    constructor(title: string, description?: string) {
        this.title = title;
        this.description = description;
    }
    
    public start(): void {
        this.status = TaskStatus.IN_PROGRESS;
    }

    public complete(): void {
        this.status = TaskStatus.COMPLETED;
    }

    get Status(): TaskStatus {
        return this.status;
    }

    set Status(newStatus: TaskStatus) {
        this.status = newStatus;
    }
}