import { Component, ChangeDetectorRef } from '@angular/core'
import { ButtonComponent } from '../../components/ui/button/button.component'
import { InputComponent } from '../../components/ui/input/input.component'
import { SubscribeComponent } from '../../components/layout/subscribe/subscribe.component'
import { ToastrService } from 'ngx-toastr'
import { NewsComponent } from '../../components/layout/news/news.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, InputComponent, SubscribeComponent, NewsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showSubscribe: boolean = false

  constructor(
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {
    document.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() !== 'escape') return
      this.showSubscribe = false
      this.cdr.detectChanges()
    })
  }

  handleCancelSubscribe = () => {
    this.showSubscribe = false
    this.cdr.detectChanges()
  }

  handleSubscribeOutput(value: boolean) {
    console.log(value)
    if (!value) {
      this.toastr.error('Usuário já existente.', 'Erro!')
      return
    }

    this.toastr.success('Usuário cadastrado com sucesso.', 'Sucesso!')
    this.handleCancelSubscribe()
  }

  redirect(where: string): void {
    location.href = where
  }
}
