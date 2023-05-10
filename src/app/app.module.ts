import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StudComponent } from './stud/stud.component';
import { NewcpmonentComponent } from './newcpmonent/newcpmonent.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { PipesComponent } from './pipes/pipes.component';
import { AdmsnComponent } from './college/admsn/admsn.component';
import { DeptComponent } from './college/dept/dept.component';
import { ErrorComponent } from './college/error/error.component';
import { HomeComponent } from './college/home/home.component';
import { LoginComponent } from './college/login/login.component';
import { StaffComponent } from './college/staff/staff.component';
import { TempformComponent } from './tempform/tempform.component';
import { CrudcomponentComponent } from './crudcomponent/crudcomponent.component';
import { ServiceComponent } from './service/service.component';
import { ServicecompComponent } from './service/servicecomp/servicecomp.component';





@NgModule({
  declarations: [
    AppComponent,
  
    StudComponent,
       NewcpmonentComponent,
       DatabindingComponent,
       DirectivesComponent,
       TemplateformComponent,
       ReactiveComponent,
       PipesComponent,
       AdmsnComponent,
       DeptComponent,
       ErrorComponent,
       HomeComponent,
       LoginComponent,
       StaffComponent,
       TempformComponent,
       CrudcomponentComponent,
       ServiceComponent,
       ServicecompComponent,
       
       
    
    


    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
