import { Task } from "../entities/task.entity";

export abstract class AbstractTaskRepository {
    abstract save(task: Task) : Promise<void>;
    abstract findAll(): Promise<Task[]>
    abstract findById(id: string): Promise<Task | null>;
}