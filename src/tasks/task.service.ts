import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';

const Tasks = [
  {
    id: 1,
    description: 'Task1',
    isCompleted: false,
  },
  {
    id: 2,
    description: 'Task2',
    isCompleted: false,
  },
  {
    id: 3,
    description: 'Task3',
    isCompleted: true,
  },
];
const Task = {
  id: 1,
  description: 'Task1',
  isCompleted: false,
};
@Injectable()
export class TaskService {
  create(createTaskInput: CreateTaskInput) {
    return Task;
  }

  findAll() {
    return Tasks;
  }

  findOne(id: number) {
    return Task;
  }

  update(id: number, updateTaskInput: UpdateTaskInput) {
    return Task;
  }

  remove(id: number) {
    return Task;
  }
}
