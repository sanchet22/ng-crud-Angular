import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'https://your-salesforce-api-url.com'; // Replace with actual Salesforce API URL

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tasks`);
  }

  getTaskById(taskId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/tasks/${taskId}`);
  }

  createTask(task: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/tasks`, task);
  }

  updateTask(taskId: string, task: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/tasks/${taskId}`, task);
  }

  deleteTask(taskId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/tasks/${taskId}`);
  }
}
