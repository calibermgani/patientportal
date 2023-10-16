import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {

  public jsonData = new BehaviorSubject<boolean>(false);
  getJsonValue$ = this.jsonData.asObservable();

  constructor() { }

  passData(data:any){
    console.log('asasas',data);

    this.jsonData.next(data);
  }
}
