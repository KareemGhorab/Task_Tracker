import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Task } from '../types/Task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task: Task = {
    id: 0,
    name: 'Test',
    day: 'Test',
    reminder: false,
    finished: false,
  }

  @Output() handleClick = new EventEmitter()
  @Output() handleDblClick = new EventEmitter()
  @Output() handleReminderToggle = new EventEmitter()
  @Output() handleUpdate = new EventEmitter()

  constructor() {}

  onDelete() {
    this.handleClick.emit()
  }

  toggleFinished() {
    this.handleDblClick.emit()
  }

  onToggleReminder() {
    this.handleReminderToggle.emit()
  }

  onUpdate() {
    this.handleUpdate.emit()
  }
}
