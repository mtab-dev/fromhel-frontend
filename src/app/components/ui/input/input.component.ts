import { Component, Input } from '@angular/core'

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
      (change)="keyUp($event)"
      autocomplete="off"
    />
  `,
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() id: string = ''
  @Input() type: 'text' | 'email' | 'password' = 'text'
  @Input() placeholder: string = ''
  @Input() name: string = ''
  @Input() keyUp: (e: any) => void = (e: any) => {}
}
