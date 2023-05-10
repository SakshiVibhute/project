import { Component } from '@angular/core';

@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html',
  styleUrls: ['./stud.component.css']
})
export class StudComponent {
public name : any="sakshi";
public name1 : any="https://www.google.com";
public age = 18;
public link : any=""
constructor(){
  if(this.age>16){
    this.link = "https://www.facebook.com";
  }
  else{
    this.link ="https://www.google.com";
  }
}
clickevent(){
  alert("this is click event")
}
}
