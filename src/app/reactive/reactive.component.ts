import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  public myForm: any;

  public courses: any = ['Engineering', "MCA", "BTech Agri", "MCS", "MSC"];
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      fname: [''],
      lname: [''],
      email: [''],
      course: [''],
      pass: [''],
      
    })
  }

  onSubmitData() {
    console.log(this.myForm.value);
  }


}
