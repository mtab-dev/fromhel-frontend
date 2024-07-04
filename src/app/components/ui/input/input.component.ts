import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormControl, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <input
      [id]="id"
      [type]="type"
      [placeholder]="placeholder"
      [name]="name"
      [formControl]="control"
      (input)="onInputChange($event)"
      autocomplete="off"
      class="inp"
    />
  `,
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() id: string = ''
  @Input() type: 'text' | 'email' | 'password' = 'text'
  @Input() placeholder: string = ''
  @Input() name: string = ''
  @Input() control!: FormControl

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>()

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value
    this.valueChange.emit(value)
  }
}
