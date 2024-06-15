import { Component, Input, WritableSignal, signal } from '@angular/core'

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  template: `
    <input
      [id]="id"
      [type]="type"
      [placeholder]="placeholder"
      [value]="value()"
      class="inp"
      (keyup)="handleValueChange($event)"
    />
  `,
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() id: string = ''
  @Input() type: 'text' | 'email' | 'password' = 'text'
  @Input() placeholder: string = ''

  value: WritableSignal<string> = signal<string>('')

  handleValueChange(e: any): void {
    this.value.set(e.target.value)
  }
}
