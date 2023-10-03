import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/Note/note.service';

@Component({
  selector: 'app-archive-note',
  templateUrl: './archive-note.component.html',
  styleUrls: ['./archive-note.component.scss']
})
export class ArchiveNoteComponent implements OnInit{
  noteArray:any;
  constructor(private note:NoteService){}
  ngOnInit(){
    this.archiveNoteList();
  }
  archiveNoteList(){
    this.note.GetAllNote().subscribe((response: any) => {
      //console.log(response);
      this.noteArray = response.data;
      this.noteArray = this.noteArray.filter((result:any)=>{
        return result.isAechive == true && result.isTrash == false;
      })
      //console.log(this.noteArray);
    });
  }
  refreshAchiveNote($event:any){
    this.archiveNoteList();
  }
 
}
