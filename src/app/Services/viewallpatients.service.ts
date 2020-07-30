import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ViewallpatientsService {

  constructor(private http:HttpClient) { }
  viewallpatients=()=>{
    return this.http.get('http://localhost:8080/view/allpatient')
  }
}
