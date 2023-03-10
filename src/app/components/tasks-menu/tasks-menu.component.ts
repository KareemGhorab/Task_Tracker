import { Component, OnInit } from '@angular/core'
import { Task } from '../types/Task'
import { TaskService } from 'src/app/services/task.service'

@Component({
  selector: 'app-tasks-menu',
  templateUrl: './tasks-menu.component.html',
  styleUrls: ['./tasks-menu.component.css'],
})
export class TasksMenuComponent implements OnInit {
  tasks: Task[] = []

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks))
  }
}
