import { Component } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})

export class CreateNoteComponent {
  isShow:boolean = false;
  description:any;
  title:any;
  constructor(){}
  Show() {
    this.isShow = true;
  }
}
