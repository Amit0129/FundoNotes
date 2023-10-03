import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/Note/note.service';

@Component({
  selector: 'app-trash-note',
  templateUrl: './trash-note.component.html',
  styleUrls: ['./trash-note.component.scss']
})
export class TrashNoteComponent implements OnInit{
  noteArray = [];
  isDelete = 'true';
  constructor(private note:NoteService){}
  
  ngOnInit(){
    this.GetAllTrashNode();
  }
  GetAllTrashNode(){
    this.note.GetAllNote().subscribe((response: any) => {
      //console.log(response);
      this.noteArray = response.data;
      this.noteArray = this.noteArray.filter((result:any)=>{
        return result.isAechive == false && result.isTrash == true;
      })
      console.log(this.noteArray);
    });
  }
  refreshTrasnNote($event:any){
    this.GetAllTrashNode();
  }
  refershAfeterDelete($event:any){
    this.GetAllTrashNode();
  }
}
