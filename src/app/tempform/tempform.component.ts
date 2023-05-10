import { Component } from '@angular/core';

@Component({
  selector: 'app-tempform',
  templateUrl: './tempform.component.html',
  styleUrls: ['./tempform.component.css']
})
export class TempformComponent {
  public courses : any = ['Engineering', "MCA", "BTech Agri", "MCS", "MSC"];

  public allData :any = [];
  public showFlag:boolean= false;

  public fn:any="";
  public ln:any="";
  public em:any="";
  public cor:any="";
  public gen:any="";
  public ps:any="";
  public cps:any="";

  public idd:any;
  public count:number = 1;
  onSubmitData(data:any){
    console.log("This is the template driven from");
    console.log(data);
    // add the unique id to every record
    data.value.id = this.count;
    this.allData.push(data.value);
    if(this.allData.length > 0){
      this.showFlag = true;
    }
    this.count++;
    console.log(this.allData);
  }

  onDel(data:any){
    console.log(data);
    console.log(this.allData);
    this.idd = data.id;
  }

  onUpdate(dt1:any){
    console.log(dt1);
    this.idd = dt1.id;
    this.fn = dt1.fname;
    this.ln = dt1.lname;
    this.em = dt1.eml;
    this.cor = dt1.course;
    this.gen = dt1.gender;
    this.ps = dt1.pass;
    this.cps = dt1.cpass;
  }

  updateData(dt:any){
    console.log(dt);
    // main updation process will be happen here.
  }
  //Local CRUD ==> 
    // Create ==> Record insert == > done
    // Read ===> Record fetch and show in tabular format  ===> done
    // Update ===> Record update ===> done 
    // Delete ===> Record Delete  ===> done
  
    //  1. Local CRUD ==> only working with local at UI.
  // 2. Ready API CRUD ===> 
  // 3. Create my own API's with node and express and mongodb and perform CRUD.

}



