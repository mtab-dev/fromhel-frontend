import { Component, EventEmitter, Input, Output } from '@angular/core'
import { InputComponent } from '../../ui/input/input.component'
import { ButtonComponent } from '../../ui/button/button.component'
import { HttpClient } from '@angular/common/http'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
// import { ENVIROMENTS } from '../../../config/env'

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  })
  name: string = ''
  clientEmail: string = ''

  @Input() handleCancelSubscribe: () => void = () => {}

  constructor(private httpClient: HttpClient) {}

  @Output() sucess: EventEmitter<boolean> = new EventEmitter<boolean>()

  submit() {
    if (this.userForm.status != 'VALID') {
      return
    }

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
