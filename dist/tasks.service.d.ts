import { Repository } from 'typeorm';
import { Task } from './task.entity';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: Repository<Task>);
    findAll(): Promise<Task[]>;
    findOne(id: string): Promise<Task>;
    create(task: Task): Promise<Task>;
    update(id: string, task: Partial<Task>): Promise<Task>;
    delete(id: string): Promise<void>;
}
