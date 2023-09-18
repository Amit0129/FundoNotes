import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = 'https://localhost:44384/api';
  constructor(private httpclient: HttpClient) {}

  postService(url: string,reqdata: any,token: boolean,httpOption: any = {})
  {
    return this.httpclient.post(this.baseUrl + url,reqdata,token && httpOption);
  }
  getService(url:string, token:boolean, httpheaderOption:any){
    return this.httpclient.get(this.baseUrl+url,token && httpheaderOption)
  }
}
