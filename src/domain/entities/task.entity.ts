import { TaskStatus } from "../value-objects/task-status.vo";

export class Task {
    id: string;
    title: string;
    description?: string;
    private status: TaskStatus;

    constructor(id: string, title: string, description?: string, status: TaskStatus = TaskStatus.OPEN) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
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