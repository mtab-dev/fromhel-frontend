import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core'
import { ITeam } from '../../interfaces/team.interface'
import { LinksComponent } from '../../components/layout/links/links.component'

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [LinksComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit, OnDestroy {
  teamMembers: Array<ITeam> = [
    {
      name: 'Gustavo Matias',
      role: 'Desenvolvedor',
      image: 'gustavo.jpeg',
      show: false
    },
    {
      name: 'Gabriel Dantas',
      role: 'Level Designer',
      image: 'dantas.jpeg',
      show: false
    },
    {
      name: 'André Kelian',
      role: 'Desenvolvedor',
      image: 'kelian.jpeg',
      show: false
    },
    {
      name: 'André Luis',
      role: 'Character Designer',
      image: 'luis.jpeg',
      show: false
    },
    {
      name: 'Rafael Marques',
      role: 'Projetista',
      image: 'marques.jpeg',
      show: false
    },
    {
      name: 'Henrique Albuquerque',
      role: 'Interface Designer',
      image: 'albuquerque.jpeg',
      show: false
    },
    {
      name: 'Henrique Lima',
      role: 'Sonoplasta',
      image: 'lima.jpeg',
      show: false
    },
    {
      name: 'Matheus Abrantes',
      role: 'Desenvolvedor Web',
      image: 'abrantes.jpeg',
      show: false
    },
    {
      name: 'Gabriel Araújo',
      role: 'Desenvolvedor Web',
      image: 'araujo.jpeg',
      social: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/garaújo/'
        },
        {
          name: 'Github',
          url: 'https://github.com/theMyntt'
        }
      ],
      show: false
    }
  ]

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    document.addEventListener('keydown', this.handleEscape)
  }

  ngOnDestroy() {
    document.removeEventListener('keydown', this.handleEscape)
  }

  handleEscape = (e: KeyboardEvent) => {
    if (e.key.toLowerCase() !== 'escape') return
    this.disableLinks()
    this.cdr.detectChanges()
  }

  disableLinks = () => {
    for (let member of this.teamMembers) {
      member.show = false
    }
    this.cdr.detectChanges()
  }
}
