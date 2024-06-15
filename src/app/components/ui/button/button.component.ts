import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
  <button [type]="type" class="btn btn-{{class}} btn-{{variant}}">{{text.toUpperCase()}}</button>
  `,
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = ""
  @Input() type: 'button' | 'submit' = "button"
  @Input() class: string = ""
  @Input() variant: 'primary' | 'secondary' = "primary"
}
