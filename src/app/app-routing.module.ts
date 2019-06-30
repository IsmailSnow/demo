import { HelpComponent } from './components/help/help.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoriqueComponent } from './components/historique/historique.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { VersionsComponent } from './components/versions/versions.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WaitingLineComponent } from './components/waiting-line/waiting-line.component';

const routes: Routes = [
  {
    path: 'historique', component: HistoriqueComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'notifications', component: NotificationsComponent
  },
  {
    path: 'versions', component: VersionsComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'waiting', component: WaitingLineComponent
  },
  {
    path: 'help', component: HelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
