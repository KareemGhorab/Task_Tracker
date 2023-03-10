import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Task } from '../components/types/Task'

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Observable<Task[]> {
    const tasks = of([
      { id: 1, name: 'Study Angular', day: '3/10/2023', reminder: true },
      { id: 2, name: 'Study SpringBoot', day: '4/10/2023', reminder: true },
      {
        id: 3,
        name: 'Organize the Task Tracker',
        day: '5/10/2023',
        reminder: false,
      },
      { id: 4, name: 'Work for Valeo :D', day: '6/10/2023', reminder: true },
    ])
    return tasks
  }
}
