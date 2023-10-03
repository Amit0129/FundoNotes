import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { GetallNoteComponent } from './components/getall-note/getall-note.component';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { IconsComponent } from './components/icons/icons.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { ArchiveNoteComponent } from './components/archive-note/archive-note.component';
import { TrashNoteComponent } from './components/trash-note/trash-note.component';
import { SearchPipe } from './pipes/Search/search.pipe';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegistrationComponent, DashboardComponent, CreateNoteComponent, GetallNoteComponent, DisplayNoteComponent, IconsComponent, UpdateNoteComponent, ArchiveNoteComponent, TrashNoteComponent, SearchPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTooltipModule,
    MatListModule,
    FormsModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
