import { Component, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent {
  @Input() noteList: any
  constructor(public dialog: MatDialog){}
  openDialog(item:any){
    const dialogRef = this.dialog.open(UpdateNoteComponent,{
      data:item
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log("Dilog box was closed",result)
    })
  }
}

