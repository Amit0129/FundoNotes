import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  token:any;
  constructor(private http: HttpService) {this.token = localStorage.getItem('token')}
  AddNote(paylode:any){
    let httpOption={
      headers:new HttpHeaders({
        'Content-type' : 'application/json',
        Authorization:'Bearer '+ this.token
      })
    }
    console.log(paylode);
    return this.http.postService('/Note',paylode,true,httpOption)
  }
  GetAllNote(){
    console.log(this.token)
    let httpOption={
      headers:new HttpHeaders({
        'Content-type' : 'application/json',
        Authorization:'Bearer '+ this.token
      })
    }
    console.log(httpOption);
    return this.http.getService('/Note',true,httpOption);
  }
}
