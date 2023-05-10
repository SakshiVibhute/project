import { Component } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent {
  public allData :any = [];
  public showFlag:boolean= false;

  public fn:any="";

  onSubmitBtn(data:any){
    console.log("This is the template driven from");
    console.log(data);
    this.allData.push(data.value);
    if(this.allData.length > 0){
      this.showFlag = true;
    }

    console.log(this.allData);
  }

  onDel(){
    console.log("on Delete");
  }




}
