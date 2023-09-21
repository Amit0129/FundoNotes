import { Component, Input } from '@angular/core';
import { NoteService } from 'src/app/services/Note/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
  constructor(private note : NoteService){}
  @Input() notes:any;
  
  deleteNote(){
    let payload ={
     noteid : this.notes.noteId
    }
    return this.note.TrashNote(payload).subscribe((response:any)=>{
      console.log(response.message)
    })
  }
  archiveNote(){
    let paload ={
      noteid: this.notes.noteId
    }
    console.log(paload);
    return this.note.ArchiveNote(paload).subscribe((response:any)=>{
      console.log(response.message)
    })
  }

}
