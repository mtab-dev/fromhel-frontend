import { Component, WritableSignal, signal } from '@angular/core'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMenu: WritableSignal<boolean> = signal<boolean>(false)

  toggleMenu(): void {
    this.showMenu.set(!this.showMenu())
  }
}
