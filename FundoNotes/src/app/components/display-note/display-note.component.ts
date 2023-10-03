import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { DataService } from 'src/app/services/Data/data.service';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() noteList: any;
  @Input() isTrash:any;
  chilsIsTrash:boolean=true;
  


  @Output() archiveEventDisplay =new EventEmitter<any>();
  @Output() trashEventDisplay =new EventEmitter<any>();
  @Output() updatesEventDisplay = new EventEmitter<any>();
  @Output() deleteEventDiaplay = new EventEmitter<any>();
  searchString:any;
  
  constructor(public dialog: MatDialog,private dataService:DataService){}
  
  ngOnInit(){
    this.chilsIsTrash = this.isTrash;
    this.dataService.currentMessage.subscribe(resultData =>{
      this.searchString=resultData
      console.log(this.searchString)
    })
  }


  openDialog(item:any){
    const dialogRef = this.dialog.open(UpdateNoteComponent,{
      height: '156px',
      width: '500px',
      data:item
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.updatesEventDisplay.emit(result);
      console.log("Dilog box was closed",result)
    })
  }
  reciveArchive($event:any){
    //console.log($event)
    this.archiveEventDisplay.emit($event)
  }
  reciveTrash($event:any){
    //console.log($event)
    this.trashEventDisplay.emit($event)
  }
  reciveDelete($event:any){
    this.deleteEventDiaplay.emit($event)
  }
}

