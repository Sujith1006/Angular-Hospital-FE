import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AddnewroomService {

  constructor(private http:HttpClient) { }
  addnewroom=()=>{
    return this.http.post('http://localhost:8080/patient/newroom',{})
  }
  addpatienttorooms=(data,patientinfo)=>{
    return this.http.post('http://localhost:8080/patient/addtoroom',{data,patientinfo})
  }
  addtomedicaltable=(patientinfo)=>{
    return this.http.post('http://localhost:8080/add/medicaltable',{patientinfo})
  }
}
