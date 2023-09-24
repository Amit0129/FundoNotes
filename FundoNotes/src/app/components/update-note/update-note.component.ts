import { Component, EventEmitter, Inject, Output } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/Note/note.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss'],
})
export class UpdateNoteComponent {
  title: any;
  description: any;
  id:any;

  constructor(public dialogRef: MatDialogRef<UpdateNoteComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private note:NoteService) 
  {
    this.title = data.title,
    this.description = data.note,
    this.id = data.noteId
  }
  updateNote(){
    let payload = {
      noteId : this.id,
      title : this.title,
      note : this.description
    }
    this.note.UpdateNote(payload).subscribe((response) =>{
      console.log(response)
      this.dialogRef.close();
    })
    
  }
}
