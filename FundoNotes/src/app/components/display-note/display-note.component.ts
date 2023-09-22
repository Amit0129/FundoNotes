import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent {
  @Input() noteList: any
  @Output() archiveEventDisplay =new EventEmitter<any>();
  @Output() trashEventDisplay =new EventEmitter<any>();
  
  constructor(public dialog: MatDialog){}
  openDialog(item:any){
    const dialogRef = this.dialog.open(UpdateNoteComponent,{
      height: '156px',
      width: '500px',
      data:item
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log("Dilog box was closed",result)
    })
  }
  reciveArchive($event:any){
    console.log($event)
    this.archiveEventDisplay.emit($event)
  }
  reciveTrash($event:any){
    console.log($event)
    this.trashEventDisplay.emit($event)
  }
}

