import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule } from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MainviewComponent } from './Components/mainview/mainview.component';
import { PatientviewComponent } from './Components/patientview/patientview.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainviewComponent,
    PatientviewComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
