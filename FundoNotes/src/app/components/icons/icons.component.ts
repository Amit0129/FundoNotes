import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/Note/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
  constructor(private note : NoteService,private snackBar: MatSnackBar){}
  @Input() notes:any;
  
  deleteNote(){
    let payload ={
     noteid : this.notes.noteId
    }
    return this.note.TrashNote(payload).subscribe((response:any)=>{
      console.log(response.message)
      this.snackBar.open("Note binned")
    })
  }
  archiveNote(){
    let paload ={
      noteid: this.notes.noteId
    }
    console.log(paload);
    return this.note.ArchiveNote(paload).subscribe((response:any)=>{
      console.log(response.message)
      this.snackBar.open("Note archived")
    })
  }

}
