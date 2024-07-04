import { Component, EventEmitter, Input, Output } from '@angular/core'
import { InputComponent } from '../../ui/input/input.component'
import { ButtonComponent } from '../../ui/button/button.component'
import { HttpClient } from '@angular/common/http'
// import { ENVIROMENTS } from '../../../config/env'

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent {
  name: string = ''
  clientEmail: string = ''

  @Input() handleCancelSubscribe: () => void = () => {}

  constructor(private httpClient: HttpClient) {}

  @Output() sucess: EventEmitter<boolean> = new EventEmitter<boolean>()

  submit() {
    if (!this.name || !this.clientEmail) return

    this.httpClient
      .post('https://fromhel-backend.vercel.app/register', {
        clientName: this.name.toUpperCase(),
        email: this.clientEmail.toLowerCase()
      })
      .subscribe(
        (response) => {
          console.log(response)
          this.sucess.emit(true)
        },
        (error) => {
          console.log(error)
          this.sucess.emit(true)
        }
      )
  }

  handleNameChange(value: string): void {
    this.name = value
  }

  handleEmailChange(value: string): void {
    this.clientEmail = value
  }
}
