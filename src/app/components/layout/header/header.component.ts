import { Component, WritableSignal, signal } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMenu: WritableSignal<boolean> = signal<boolean>(false)

  constructor(private router: Router) {}

  toggleMenu(): void {
    this.showMenu.set(!this.showMenu())
  }

  async disableMenu(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500))
    this.showMenu.set(false)
  }

  toHome() {
    this.router.navigate(['/'])
  }
}
