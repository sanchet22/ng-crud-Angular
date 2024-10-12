import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: string[] = [];

  constructor() {}

  addTask(task: string) {
    this.tasks.push(task);
  }

  getTasks(): string[] {
    return [...this.tasks];
  }

  deleteTask(task: string) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  updateTask(oldTask: string, newTask: string) {
    const index = this.tasks.indexOf(oldTask);
    if (index !== -1) {
      this.tasks[index] = newTask;
    }
  }
}
