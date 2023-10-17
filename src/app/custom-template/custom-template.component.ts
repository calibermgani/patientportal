import { JsonServiceService } from './../services/json-service.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-custom-template',
  templateUrl: './custom-template.component.html',
  styleUrls: ['./custom-template.component.scss']
})
export class CustomTemplateComponent {

  public form!: Object;
  data :any = {
    "components": [
        {
            "label": "Columns",
            "columns": [
                {
                    "components": [
                        {
                            "label": "First Name",
                            "applyMaskOn": "change",
                            "tableView": true,
                            "validate": {
                                "required": true
                            },
                            "key": "firstName",
                            "type": "textfield",
                            "input": true
                        },
                        {
                            "label": "Middle Name",
                            "applyMaskOn": "change",
                            "tableView": true,
                            "validate": {
                                "required": true
                            },
                            "key": "middleName",
                            "type": "textfield",
                            "input": true
                        },
                        {
                            "label": "Phone Number",
                            "applyMaskOn": "change",
                            "tableView": true,
                            "validate": {
                                "required": true
                            },
                            "key": "phoneNumber",
                            "type": "phoneNumber",
                            "input": true
                        },
                        {
                            "label": "Flat/Unit No",
                            "applyMaskOn": "change",
                            "tableView": true,
                            "key": "flatUnitNo",
                            "type": "textfield",
                            "input": true
                        },
                        {
                            "label": "Street Name",
                            "applyMaskOn": "change",
                            "tableView": true,
                            "key": "streetName",
                            "type": "textfield",
                            "input": true
                        },
                        {
                            "label": "Town/City",
                            "applyMaskOn": "change",
                            "tableView": true,
                            "key": "townCity",
                            "type": "textfield",
                            "input": true
                        }
                    ],
                    "offset": 0,
                    "pull": 0,
                    "size": "sm",
                    "currentWidth": 6,
                    "width": 6,
                    "push": 1
                },
                {
                    "components": [
                        {
                            "label": "Last Name",
                            "applyMaskOn": "change",
                            "tableView": true,
                            "validate": {
                                "required": true
                            },
                            "key": "lastName",
                            "type": "textfield",
                            "input": true
                        },
                        {
                            "label": "Name(s) of children",
                            "applyMaskOn": "change",
                            "tableView": true,
                            "key": "nameSOfChildren",
                            "type": "textfield",
                            "input": true
                        },
                        {
                            "label": "Gender",
                            "optionsLabelPosition": "right",
                            "inline": false,
                            "tableView": false,
                            "values": [
                                {
                                    "label": "Male",
                                    "value": "male",
                                    "shortcut": ""
                                },
                                {
                                    "label": "Female",
                                    "value": "female",
                                    "shortcut": ""
                                }
                            ],
                            "validate": {
                                "required": true
                            },
                            "key": "gender",
                            "type": "radio",
                            "input": true
                        },
                        {
                            "label": "Street No",
                            "applyMaskOn": "change",
                            "tableView": true,
                            "key": "streetNo",
                            "type": "textfield",
                            "input": true
                        },
                        {
                            "label": "Suburb",
                            "applyMaskOn": "change",
                            "tableView": true,
                            "key": "suburb",
                            "type": "textfield",
                            "input": true
                        },
                        {
                            "label": "State",
                            "applyMaskOn": "change",
                            "tableView": true,
                            "key": "state",
                            "type": "textfield",
                            "input": true
                        }
                    ],
                    "width": 6,
                    "offset": 0,
                    "push": 0,
                    "pull": 0,
                    "size": "sm",
                    "currentWidth": 6
                }
            ],
            "key": "columns",
            "type": "columns",
            "input": false,
            "tableView": false
        }
    ]
}
  apiUrl=environment.apiUrl;

  constructor( private http : HttpClient,private jsonService:JsonServiceService){}

  ngOnInit(){
    this.http.get(`${this.apiUrl}/custom`).subscribe((response:any)=>{
      console.log('Custom Template',response);

      if(response.length>0){

        this.form = {components:response};
        this.jsonService.passData_custom(false)
      }
      else{
        this.form = this.data;
        this.jsonService.passData_custom(false)
      }
    })
      this.jsonService.getCustomEditValue$.subscribe((res:any)=>{
      if(res){
        this.http.get(`${this.apiUrl}/custom`).subscribe((response:any)=>{
          console.log('Response for custom Form',response);

          this.form = response[0];
        })
      }
      this.jsonService.passData_EditCustom(false);
    });
  }

  ngAfterViewInit(): void {

  }


  submit(event:any){
    console.log('Form Data',event);
  }

  edit_form(){
    console.log('sdasa');
    this.http.post(`${this.apiUrl}/custom`,this.data).subscribe((response:any)=>{
      console.log('response',response);
    })
    this.jsonService.passData_custom(true);
  }


}
