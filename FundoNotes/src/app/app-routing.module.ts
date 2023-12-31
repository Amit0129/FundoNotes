import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetallNoteComponent } from './components/getall-note/getall-note.component';
import { IconsComponent } from './components/icons/icons.component';
import { ArchiveNoteComponent } from './components/archive-note/archive-note.component';
import { TrashNoteComponent } from './components/trash-note/trash-note.component';


const routes: Routes = [
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'icon',
    component: IconsComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      {
        path:'getallnote',component:GetallNoteComponent
      },
      {
        path:'archive-note',component:ArchiveNoteComponent
      },
      {
        path:'trash-note',component:TrashNoteComponent
      }
    ]
  },
  {
    path:'',
    redirectTo: '/login',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
