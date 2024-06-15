import { Component, Input, WritableSignal, signal } from '@angular/core'
import { InputComponent } from '../../ui/input/input.component'
import { ButtonComponent } from '../../ui/button/button.component'

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent {
  name: string = ''
  email: string = ''

  @Input() handleCancelSubscribe: () => void = () => { }

  handleNameChange(e: any): void {
    this.name = e.target.value
  }

  handleEmailChange(e: any): void {
    this.email = e.target.value
  }
}
