import { Component,OnInit } from '@angular/core';

import { NoteService } from 'src/app/services/Note/note.service';

@Component({
  selector: 'app-getall-note',
  templateUrl: './getall-note.component.html',
  styleUrls: ['./getall-note.component.scss'],
})
export class GetallNoteComponent implements OnInit{
  noteArray = [];
  data:any;
  constructor(private note: NoteService ) {}
  ngOnInit() {
    this.getAllNote();
    
  }
  getAllNote() {
    this.note.GetAllNote().subscribe((response: any) => {
      //console.log(response);
      this.noteArray = response.data;
      this.noteArray.reverse();
      this.noteArray = this.noteArray.filter((result:any)=>{
        return result.isAechive == false && result.isTrash == false;
      })
      //console.log(this.noteArray);
    });
  }
  //getting search data from search bar

  refreshAllNote($event:any){
    //console.log($event);
    this.getAllNote();
  }

  reciveArchiveDisplay($event:any){
    //console.log($event)
    this.getAllNote();
  }

  reciveTrashDisplay($event:any){
    //console.log($event)
    this.getAllNote();
  }

  reciveUpdatDisplay($event:any){
    this.getAllNote();
  }
}
