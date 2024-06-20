import { Component, ChangeDetectorRef } from '@angular/core'
import { ButtonComponent } from '../../components/ui/button/button.component'
import { InputComponent } from '../../components/ui/input/input.component'
import { SubscribeComponent } from '../../components/layout/subscribe/subscribe.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, InputComponent, SubscribeComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showSubscribe: boolean = false

  constructor(private cdr: ChangeDetectorRef) {
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
    this.showSubscribe = !value
  }

  redirect(where: string): void {
    location.href = where
  }
}
