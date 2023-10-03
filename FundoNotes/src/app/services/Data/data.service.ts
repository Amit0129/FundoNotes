import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject<any>("");
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeData(data:any){
    this.messageSource.next(data)
  }
}
