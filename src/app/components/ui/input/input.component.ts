import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-input',
  standalone: true,
  template: `
    <input
      [id]="id"
      [type]="type"
      [placeholder]="placeholder"
      class="inp"
      [name]="name"
      autocomplete="off"
      (input)="onInputChange($event)"
    />
  `,
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() id: string = ''
  @Input() type: 'text' | 'email' | 'password' = 'text'
  @Input() placeholder: string = ''
  @Input() name: string = ''

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>()

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value
    this.valueChange.emit(value)
  }
}
