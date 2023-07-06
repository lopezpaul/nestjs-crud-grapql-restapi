
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateTaskInput {
    description: string;
    isCompleted?: Nullable<boolean>;
}

export interface UpdateTaskInput {
    id: number;
    description: string;
    isCompleted?: Nullable<boolean>;
}

export interface Task {
    id: number;
    description: string;
    isCompleted?: Nullable<boolean>;
}

export interface IQuery {
    tasks(): Nullable<Task>[] | Promise<Nullable<Task>[]>;
    task(id: number): Nullable<Task> | Promise<Nullable<Task>>;
}

export interface IMutation {
    createTask(createTaskInput: CreateTaskInput): Task | Promise<Task>;
    updateTask(updateTaskInput: UpdateTaskInput): Task | Promise<Task>;
    removeTask(id: number): Nullable<Task> | Promise<Nullable<Task>>;
}

type Nullable<T> = T | null;
