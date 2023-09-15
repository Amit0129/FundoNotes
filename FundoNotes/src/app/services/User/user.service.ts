import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }
  Login(paylode:any){
    let header = {
      header: new HttpHeaders({
        'Content-Type' : 'application/json',
      }),
    };
    return this.http.postService("/User/Login",paylode,false,header)
  }
  Register(payload:any){
    let header = {
      header : new HttpHeaders({
        'Content-Type' : 'application/json',
      })
    };
    return this.http.postService("/User/Register",payload,false,header)
  }
}
