import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Task } from '../types/Task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task: Task = { id: 0, name: 'Test', day: 'Test', reminder: false }

  @Output() click = new EventEmitter()

  constructor() {}

  onDelete() {
    this.click.emit()
  }
}
