import { Component } from '@angular/core';
import { ServicecompComponent } from './servicecomp/servicecomp.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
public data:any;
  public data1:any;

  public userData:any;
  constructor(private ds :Dataservice){
    this.getStudentData();

    this.sendStudentData();

    this.getuserData();
  }

  getStudentData(){
    
    // console.log(this.ds.getSampleData());
    this.data = this.ds.getSampleData();
  }

  sendStudentData(){
    this.data1={
      username:"alex123",
      password:"123",
      captcha:"AeXd6"
    }
    this.ds.sendSampleData(this.data1);
  }

  getuserData(){
    this.ds.getAPIData().subscribe((res:any)=>{
      this.userData = res ;
      console.log(this.userData);
    })
    
  }



}



