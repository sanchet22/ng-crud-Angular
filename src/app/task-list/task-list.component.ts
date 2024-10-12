import { Component, OnInit } from '@angular/core';  // Keep this single import
import { TaskService } from '../services/task.service';

@Component({
  selector: 'ng-training-crud',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  deleteTask(taskId: string) {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    });
  }
}
