import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Task } from '../components/types/Task'

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl: string = 'http://localhost:3000/tasks'

  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl)
  }

  deleteTask(id: number): Observable<Task> {
    return this.httpClient.delete<Task>(this.apiUrl + `/${id}`)
  }

  updateTask(task: Task): Observable<Task> {
    return this.httpClient.put<Task>(this.apiUrl + `/${task.id}`, task)
  }
}
