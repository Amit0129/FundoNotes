import { Component, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  @Output() refreshNote = new EventEmitter();
  
  constructor(private note: NoteService,private snackBar: MatSnackBar) {}
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
        this.refreshNote.emit(response);
        console.log(response.message);
        this.snackBar.open('Note created  Successfully', '', {
          duration: 1000,
        });
      });
      this.title = null;
      this.description = null;
    }
  }
}
