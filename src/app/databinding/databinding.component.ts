import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
//interpolation binding
public placename:string ="";

// attribute binding

public studmarks:any = "35";

public link:any = "";

//2-waybinding
public StudName : any ="";
constructor(){
  //interpolation binding
  this.placename ="Satara";

  // //attribute binding
  if(this.studmarks > 40){
    this.link = "https://www.wikipedia.org"
  }else{
    this.link="https://www.W3school.com"
  }
}
//event binding
eventClick(){
  console.log("hello angular")
}
}
