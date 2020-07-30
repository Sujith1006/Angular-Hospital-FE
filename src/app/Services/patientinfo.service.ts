import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PatientinfoService {

  constructor(private http:HttpClient) { 
  }
  AddnewPatient=(details)=>{
    let token=localStorage.getItem('userdetails')
    let HeadersObject=new HttpHeaders().set('Authorization',token)
    let header={
      headers:HeadersObject
    }
      return this.http.post('http://localhost:8080/patient/register',{details},header)
  }
  getpdf=()=>{
    return this.http.get('http://localhost:8080/patient/register/pdf',{responseType:'blob'})
  }
}
