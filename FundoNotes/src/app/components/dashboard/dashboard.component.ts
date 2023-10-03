import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/Data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router,private dataService:DataService) {}
  ngOnInit() {
    
  }
  searchNote(event:any){
    //console.log(event.target.value)
    this.dataService.changeData(event.target.value);
  }

  LogOut(){
    localStorage.removeItem('token');
    this.route.navigateByUrl('/login');
  }
}
