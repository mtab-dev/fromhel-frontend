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
import { ToastrService } from 'ngx-toastr'

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

  @Input() handleCancelSubscribe: () => void = () => {}

  constructor(
    private httpClient: HttpClient,
    private toastr: ToastrService
  ) {}

  @Output() sucess: EventEmitter<boolean> = new EventEmitter<boolean>()

  submit() {
    if (this.userForm.status != 'VALID') {
      if (
        this.userForm.get('name')?.hasError('required') ||
        this.userForm.get('email')?.hasError('required')
      ) {
        this.toastr.error(
          'Por favor, preencha todos os dados.',
          'Dados incorretos!'
        )
        return
      }
      if (this.userForm.get('email')?.hasError('email')) {
        this.toastr.error(
          'Por favor, preecha um e-mail valido.',
          'Dados incorretos!'
        )
      }
      return
    }

    const email = this.userForm.get('email')?.value ?? ''
    const name = this.userForm.get('name')?.value ?? ''

    this.httpClient
      .post('https://fromhel-backend.vercel.app/register', {
        clientName: name.toUpperCase(),
        email: email.toLowerCase()
      })
      .subscribe(
        () => {
          this.sucess.emit(true)
        },
        () => {
          this.sucess.emit(false)
        }
      )
  }
}
