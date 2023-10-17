import { Component, EventEmitter, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PrismService } from '../services/prism.service';
import { JsonServiceService } from '../services/json-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent {

  public form!:Object;
  @Output('change') change?: EventEmitter<object>;
  formData:any;
  data :Object = {
    // "components": [
    //     {
    //         "label": "Columns",
    //         "columns": [
    //             {
    //                 "components": [
    //                     {
    //                         "label": "First Name",
    //                         "applyMaskOn": "change",
    //                         "tableView": true,
    //                         "validate": {
    //                             "required": true
    //                         },
    //                         "key": "firstName",
    //                         "type": "textfield",
    //                         "input": true
    //                     },
    //                     {
    //                         "label": "Middle Name",
    //                         "applyMaskOn": "change",
    //                         "tableView": true,
    //                         "validate": {
    //                             "required": true
    //                         },
    //                         "key": "middleName",
    //                         "type": "textfield",
    //                         "input": true
    //                     },
    //                     {
    //                         "label": "Phone Number",
    //                         "applyMaskOn": "change",
    //                         "tableView": true,
    //                         "validate": {
    //                             "required": true
    //                         },
    //                         "key": "phoneNumber",
    //                         "type": "phoneNumber",
    //                         "input": true
    //                     },
    //                     {
    //                         "label": "Flat/Unit No",
    //                         "applyMaskOn": "change",
    //                         "tableView": true,
    //                         "key": "flatUnitNo",
    //                         "type": "textfield",
    //                         "input": true
    //                     },
    //                     {
    //                         "label": "Street Name",
    //                         "applyMaskOn": "change",
    //                         "tableView": true,
    //                         "key": "streetName",
    //                         "type": "textfield",
    //                         "input": true
    //                     },
    //                     {
    //                         "label": "Town/City",
    //                         "applyMaskOn": "change",
    //                         "tableView": true,
    //                         "key": "townCity",
    //                         "type": "textfield",
    //                         "input": true
    //                     }
    //                 ],
    //                 "offset": 0,
    //                 "pull": 0,
    //                 "size": "sm",
    //                 "currentWidth": 6,
    //                 "width": 6,
    //                 "push": 1
    //             },
    //             {
    //                 "components": [
    //                     {
    //                         "label": "Last Name",
    //                         "applyMaskOn": "change",
    //                         "tableView": true,
    //                         "validate": {
    //                             "required": true
    //                         },
    //                         "key": "lastName",
    //                         "type": "textfield",
    //                         "input": true
    //                     },
    //                     {
    //                         "label": "Name(s) of children",
    //                         "applyMaskOn": "change",
    //                         "tableView": true,
    //                         "key": "nameSOfChildren",
    //                         "type": "textfield",
    //                         "input": true
    //                     },
    //                     {
    //                         "label": "Gender",
    //                         "optionsLabelPosition": "right",
    //                         "inline": false,
    //                         "tableView": false,
    //                         "values": [
    //                             {
    //                                 "label": "Male",
    //                                 "value": "male",
    //                                 "shortcut": ""
    //                             },
    //                             {
    //                                 "label": "Female",
    //                                 "value": "female",
    //                                 "shortcut": ""
    //                             }
    //                         ],
    //                         "validate": {
    //                             "required": true
    //                         },
    //                         "key": "gender",
    //                         "type": "radio",
    //                         "input": true
    //                     },
    //                     {
    //                         "label": "Street No",
    //                         "applyMaskOn": "change",
    //                         "tableView": true,
    //                         "key": "streetNo",
    //                         "type": "textfield",
    //                         "input": true
    //                     },
    //                     {
    //                         "label": "Suburb",
    //                         "applyMaskOn": "change",
    //                         "tableView": true,
    //                         "key": "suburb",
    //                         "type": "textfield",
    //                         "input": true
    //                     },
    //                     {
    //                         "label": "State",
    //                         "applyMaskOn": "change",
    //                         "tableView": true,
    //                         "key": "state",
    //                         "type": "textfield",
    //                         "input": true
    //                     }
    //                 ],
    //                 "width": 6,
    //                 "offset": 0,
    //                 "push": 0,
    //                 "pull": 0,
    //                 "size": "sm",
    //                 "currentWidth": 6
    //             }
    //         ],
    //         "key": "columns",
    //         "type": "columns",
    //         "input": false,
    //         "tableView": false
    //     }
    // ]
}
apiUrl = environment.apiUrl;
constructor(public prism: PrismService,private http: HttpClient,private jsonService:JsonServiceService){
  this.form = this.data;
}

ngOnInit(): void {
  this.http.delete(`${this.apiUrl}/components/${1}`).subscribe((response) => {
    console.log('Deleted successfully', response);
  },
    (error) => {
      console.error('Error deleting', error);
    }
  );

  this.http.delete(`${this.apiUrl}/custom/${1}`).subscribe((response) => {
    console.log('Deleted successfully', response);
  },
    (error) => {
      console.error('Error deleting', error);
    }
  );

  this.jsonService.getCustomValue$.subscribe((res:any)=>{
    if(res){
      this.http.get(`${this.apiUrl}/custom`).subscribe((response:any)=>{
        console.log('Response for custom Form',response);

        this.form = response[0];
      })
    }
    this.jsonService.passData_custom(false);
  });
}
onChange(event:any){
  this.formData = event;
}

ngAfterViewInit(): void {
  this.prism.init();

}
CreateNewForm(){
  console.log('FormData',this.formData);

  this.http.post(`${this.apiUrl}/components`,this.formData.form).subscribe((response:any)=>{
    console.log('Response',response);
    this.jsonService.passData_result(true);
});
}

UpdateExistingForm(){
  this.http.put(`${this.apiUrl}/custom/1`,this.formData.form).subscribe((res)=>{
    console.log('updated successfully');
    },
    (error) => {
      console.error('Error deleting', error);
    });
  this.jsonService.passData_EditCustom(true);
}

}
