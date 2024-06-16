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

  async disableMenu(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500))
    this.showMenu.set(false)
  }
}
