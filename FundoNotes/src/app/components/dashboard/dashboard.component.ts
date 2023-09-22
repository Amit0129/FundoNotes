import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/services/Note/note.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  noteArray = [];
  constructor(private note: NoteService,private route:Router) {}
  ngOnInit() {
    
  }
  LogOut(){
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }
}
