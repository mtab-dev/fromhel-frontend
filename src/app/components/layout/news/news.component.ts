import { Component } from '@angular/core'
import { ButtonComponent } from '../../ui/button/button.component'

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  redirect(where: string) {
    window.open(where, '_blank')
  }
}
