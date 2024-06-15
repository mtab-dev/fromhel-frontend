import { Component, Input } from '@angular/core'
import { ISocial } from '../../../interfaces/social.interface'

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {
  @Input() links: Array<ISocial> = []
  @Input() onClick: () => void = () => {}
}
