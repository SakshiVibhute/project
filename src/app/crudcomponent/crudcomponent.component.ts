import { Component } from '@angular/core';

@Component({
  selector: 'app-crudcomponent',
  templateUrl: './crudcomponent.component.html',
  styleUrls: ['./crudcomponent.component.css']
})
export class CrudcomponentComponent {
public allFormData: any = [];

  public courses: any = ['Engineering', "MCA", "BTech Agri", "MCS", "MSC"];

  public fn: any = "";
  public ln: any = "";
  public em: any = "";
  public cor: any = "";
  public gen: any = "";
  public ps: any = "";
  public cps: any = "";

  public idd: any;
  public count: number = 1;

  public showFlag: boolean = false;

  constructor() {

  }

  onSubmitData(fomrData: any) {

    console.log(fomrData.value);

    // add the unique id to every record
    if (fomrData.value.id == undefined) {
      // this code is for insert new record
      fomrData.value.id = this.count;
      this.allFormData.push(fomrData.value);
      if (this.allFormData.length > 0) {
        this.showFlag = true;
      }
      this.count++;
    } else {
      // this code is for to update the record 
      console.log(fomrData.value);
      this.allFormData.forEach((element: any) => {
        if (fomrData.value.id == element.id) {
          console.log(element);
          // element = fomrData.value;
          element.fname = fomrData.value.fname;
          element.lname = fomrData.value.lname;
          element.eml = fomrData.value.eml;
          element.course = fomrData.value.course;
          element.gender = fomrData.value.gender;
          element.pass = fomrData.value.pass;
          element.cpass = fomrData.value.cpass;
        }
      });
      console.log(this.allFormData);
    }
  }

  onDeleteData(dt: any) {
    console.log(dt);
    // this.allFormData.splice(dt,1);
    // i want to delete the record from array of object based on unique id in javascript 
    console.log(this.allFormData);
    this.allFormData.forEach((element: any, index: any) => {
      // console.log(element);
      if (element.id == dt.id) {
        // console.log(element);
        // delete element;
        // this.allFormData.splice(this.allFormData.indexOf(element), 1);
        this.allFormData.splice(index, 1);
      }
    });

  }

  onUpdateData(dt: any) {
    console.log(dt);
    this.idd = dt.id;
    this.fn = dt.fname;
    this.ln = dt.lname;
    this.em = dt.eml;
    this.cor = dt.course;
    this.gen = dt.gender;
    this.ps = dt.pass;
    this.cps = dt.cpass;
    // update the specific record from array of object based on unique id 
  }

  onUpdate(){
    
  }

}


// CRUD Application :
// step1 : create an comp 

// Step 2: Create template driven or reactive form  

// Step 3: Form Data submit 

// Step 4: view form data 

// Step 5 : delete the data

// step 6: apply validations 

// step 7:  update the form



