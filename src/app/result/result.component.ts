import { Component } from '@angular/core';
import { JsonServiceService } from '../services/json-service.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {

  public form!:Object;
  apiUrl = environment.apiUrl;

  constructor(private http:HttpClient,private jsonService : JsonServiceService){}

  ngOnInit(): void {}

  onSubmit(event:any){
    console.log('Submit Event',event);
  }

  ngAfterViewInit(): void {
    this.jsonService.getJsonValue$.subscribe((res:any)=>{
      if(res){
        this.http.get(`${this.apiUrl}/components`).subscribe((res:any)=>{
          this.form = res[0]
        });
        this.jsonService.passData(false);
      }
    })
  }

}
