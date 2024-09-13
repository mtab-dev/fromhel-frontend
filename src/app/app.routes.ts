import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { TeamComponent } from './pages/team/team.component'

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'FromHel Studio | Inicio'
  },
  {
    path: 'team',
    component: TeamComponent,
    title: 'FromHel Studio | Equipe'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]
