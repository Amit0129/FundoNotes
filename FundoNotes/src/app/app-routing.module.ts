import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { GetallNoteComponent } from './components/getall-note/getall-note.component';
import { IconsComponent } from './components/icons/icons.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';


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
      }
    ]
  },
  {
    path:'',
    redirectTo: '/login',
    pathMatch:'full'
  },
  {
    path:'dilog',
    component:UpdateNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
