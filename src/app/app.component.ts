import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portal';
  public form!:Object;
  data :Object = {};
  page_cdtn:boolean = true;

constructor(){
  this.form = this.data;
}
  onChange(event:any){
   console.log('Event',event);
  }

  change_page(){
    this.page_cdtn =! this.page_cdtn;
  }

}
