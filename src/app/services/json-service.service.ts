import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {

  public resultcdtn = new BehaviorSubject<boolean>(false);
  getResultValue$ = this.resultcdtn.asObservable();

  public customctn = new BehaviorSubject<boolean>(false);
  getCustomValue$ = this.customctn.asObservable();

  public Editcustomctn = new BehaviorSubject<boolean>(false);
  getCustomEditValue$ = this.Editcustomctn.asObservable();

  constructor() { }

  passData_result(data:any){
    this.resultcdtn.next(data);
  }

  passData_custom(data:any){
    this.customctn.next(data);
  }

  passData_EditCustom(data:any){
    this.Editcustomctn.next(data);
  }

}
