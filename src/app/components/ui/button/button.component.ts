import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() text: string = 'Click Me'
  @Input() bg: string = 'bg-neutral-500'

  @Output() click = new EventEmitter()

  onClick() {
    this.click.emit()
  }
}
