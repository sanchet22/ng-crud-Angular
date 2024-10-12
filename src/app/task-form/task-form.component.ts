import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  isEditMode = false;
  taskId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.taskId = params.get('id');
      if (this.taskId) {
        this.isEditMode = true;
        this.loadTask(this.taskId);
      }
    });
  }

  loadTask(id: string) {
    this.taskService.getTaskById(id).subscribe((task) => {
      this.taskForm.patchValue(task);
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const taskData = this.taskForm.value;
      if (this.isEditMode) {
        this.taskService.updateTask(this.taskId!, taskData).subscribe(() => {
          // Handle success (e.g., navigation, display message, etc.)
        });
      } else {
        this.taskService.createTask(taskData).subscribe(() => {
          // Handle success
        });
      }
    }
  }
}
