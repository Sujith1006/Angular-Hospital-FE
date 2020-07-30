import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ViewpatientsService {

  constructor(private http:HttpClient) { }
  getPatients=()=>{
    return this.http.get('http://localhost:8080/patient/viewpatient')
  }
}
