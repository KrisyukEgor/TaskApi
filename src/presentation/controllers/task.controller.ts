import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateTaskDto } from "src/application/dto/create-task.dto";
import { TaskService } from "src/infrastructure/services/task.service";

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Post()
    async create(@Body() dto: CreateTaskDto) {
        return this.taskService.createTask(dto);
    }

    @Get()
    async getAll() {
        return this.taskService.findAll();
    }
}