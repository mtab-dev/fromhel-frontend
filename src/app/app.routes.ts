import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { TeamComponent } from './pages/team/team.component'
import { PrivacyPolicesComponent } from './privacy-polices/privacy-polices.component'

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
    path: 'bulletspeel/privacy-polices',
    component: PrivacyPolicesComponent,
    title: 'FromHel Studio | Privacy Polices'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]
