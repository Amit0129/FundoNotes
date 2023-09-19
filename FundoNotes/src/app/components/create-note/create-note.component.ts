import { Component } from '@angular/core';
import { NoteService } from 'src/app/services/Note/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent {
  isShow: boolean = false;
  description: any;
  title: any;
  constructor(private note: NoteService) {}
  Show() {
    this.isShow = true;
  }
  Close() {
    this.isShow = false;
    if ((this.title != null && this.title != '') || (this.description != null && this.description != '')) 
    {
      let reqdata = {
        title: this.title,
        note: this.description,
      };
      console.log(reqdata);
      this.note.AddNote(reqdata).subscribe((response: any) => {
        console.log(response.message);
      });
      this.title = null;
      this.description = null;
    }
  }
}
