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
      role: 'Desenvolvedor GameMaker',
      image: 'gustavo.jpeg',
      social: [
        {
          name: 'Instagram',
          url: 'www.instagram.com/gustakjkkkk'
        }
      ],
      show: false
    },
    {
      name: 'Gabriel Dantas',
      role: 'Level Designer',
      image: 'dantas.jpeg',
      social: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/bifullmoon'
        },
        {
          name: 'Portifólio',
          url: 'https://www.artstation.com/gabrieldantasdesantana2'
        }
      ],
      show: false
    },
    {
      name: 'André Kelian',
      role: 'Desenvolvedor GameMaker',
      image: 'kelian.jpeg',
      social: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/andrekelian'
        }
      ],
      show: false
    },
    {
      name: 'André Luis',
      role: 'Character Designer',
      image: 'luis.jpeg',
      social: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/bizare.sonin'
        },
        {
          name: 'X',
          url: 'https://x.com/Bizare_Ande'
        }
      ],
      show: false
    },
    {
      name: 'Rafael Marques',
      role: 'Projetista',
      image: 'marques.jpeg',
      social: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/marques._.007'
        },
        {
          name: 'GitHub',
          url: 'https://github.com/marquesrafael007'
        },
        {
          name: 'Threads',
          url: 'https://www.threads.net/@marques._.007'
        }
      ],
      show: false
    },
    {
      name: 'Henrique Albuquerque',
      role: 'Interface Designer',
      image: 'albuquerque.jpeg',
      social: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/bruma_ak/'
        }
      ],
      show: false
    },
    {
      name: 'Henrique Lima',
      role: 'Sonoplasta',
      image: 'lima.jpeg',
      social: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/henriqxtt_'
        }
      ],
      show: false
    },
    {
      name: 'Matheus Abrantes',
      role: 'Desenvolvedor Web',
      image: 'abrantes.jpeg',
      social: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/matheus-o-p-abrantes'
        },
        {
          name: 'GitHub',
          url: 'https://github.com/mtab-dev'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/mtab.php/'
        }
      ],
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

  constructor(private cdr: ChangeDetectorRef) { }

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
