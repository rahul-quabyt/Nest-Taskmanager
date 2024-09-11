import { TasksService } from './tasks.service';
import { Task } from './task.entity';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    findAll(): Promise<Task[]>;
    findOne(id: string): Promise<Task>;
    create(task: Task): Promise<Task>;
    update(id: string, task: Partial<Task>): Promise<Task>;
    delete(id: string): Promise<void>;
}
