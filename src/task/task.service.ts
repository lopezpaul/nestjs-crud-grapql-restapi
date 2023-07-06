import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async create(createTaskInput: CreateTaskInput) {
    return await this.tasksRepository.save(createTaskInput);
  }

  async findAll(): Promise<Task[]> {
    return await this.tasksRepository.find({ order: { id: 'DESC' } });
  }

  findOne(id: number) {
    return this.tasksRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateTaskInput: UpdateTaskInput,
  ): Promise<Task | string> {
    const task = await this.tasksRepository.findOneBy({ id });
    if (!task) {
      return `Fail trying to update Task  #${id}. Retry with other id. ${JSON.stringify(
        updateTaskInput,
      )}`;
    }
    await this.tasksRepository.update(id, updateTaskInput);
    return await this.tasksRepository.findOneBy({ id });
  }

  async remove(id: number) {
    return await this.tasksRepository.delete(id);
  }
}
