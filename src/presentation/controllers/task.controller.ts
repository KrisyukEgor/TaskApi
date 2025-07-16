import { Body, Controller, Post } from "@nestjs/common";
import { CreateTaskDto } from "src/application/dto/create-task.dto";
import { TaskService } from "src/infrastructure/services/task.service";

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Post()
    async create(@Body() dto: CreateTaskDto) {
        return this.taskService.createTask(dto);
    }
}