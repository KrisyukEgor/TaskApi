import { Task } from "../entities/task.entity";

export abstract class AbstractTaskRepository {
    abstract save(task: Task) : Promise<Task>;
}