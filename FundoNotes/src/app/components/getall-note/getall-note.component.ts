import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/Note/note.service';

@Component({
  selector: 'app-getall-note',
  templateUrl: './getall-note.component.html',
  styleUrls: ['./getall-note.component.scss']
})
export class GetallNoteComponent  implements OnInit{
  constructor(private note:NoteService){}
  ngOnInit() {
    this.getAllNote()
  }
  getAllNote(){
    this.note.GetAllNote().subscribe((response:any)=>{
      console.log(response);
    })
  }
}
