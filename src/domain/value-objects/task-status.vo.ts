import { TaskStatusValue } from "../enum/task-status.enum";

export class TaskStatus {
    constructor(private readonly status: TaskStatusValue) {}

    public static fromValue(statusValue: TaskStatusValue): TaskStatus {
        if(!Object.values(TaskStatusValue).includes(statusValue)) {
            throw new Error("Invalid task status");
        }
        return new TaskStatus(statusValue);
    }

    public IsOpen(): boolean {
        return this.status === TaskStatusValue.OPEN; 
    }

    public IsInProgress(): boolean {
        return this.status === TaskStatusValue.IN_PROGRESS;
    }

    public IsCompleted(): boolean {
        return this.status === TaskStatusValue.COMPLETED;
    }

    public get value():TaskStatusValue {
        return this.status;
    }

    public static readonly OPEN = new TaskStatus(TaskStatusValue.OPEN);
    public static readonly IN_PROGRESS = new TaskStatus(TaskStatusValue.IN_PROGRESS);
    public static readonly COMPLETED = new TaskStatus(TaskStatusValue.COMPLETED);
}
