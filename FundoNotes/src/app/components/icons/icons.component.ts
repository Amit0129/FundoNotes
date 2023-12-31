import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() isDelete:any;

  @Output() archiveEvent = new EventEmitter<any>();
  @Output() trashEvent = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();
  
  trashNote(){
    let payload ={
     noteid : this.notes.noteId
    }
    return this.note.TrashNote(payload).subscribe((response:any)=>{
      this.trashEvent.emit(response);
      //console.log(response.message)
      this.snackBar.open("Note binned","",{
        duration:1000
      });
    })
  }
  archiveNote(){
    let paload ={
      noteid: this.notes.noteId
    }
    console.log(paload);
    return this.note.ArchiveNote(paload).subscribe((response:any)=>{
      this.archiveEvent.emit(response);
      //console.log(response.message)
      this.snackBar.open("Note archived","",{
        duration:1000
      })
    })
  }

  deleteNote(){
      let noteid : any= this.notes.noteId;
     
    return this.note.DeleteNote(noteid).subscribe((response:any)=>{
      this.deleteEvent.emit(response);
      //this.archiveNote();
      this.snackBar.open("Note Deleted","",{
        duration:1000
      })
    })
  }

}
