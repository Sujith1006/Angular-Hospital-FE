import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GivemedicationService {

  constructor(private http:HttpClient) { }
  addtreatment=(roomid)=>{
    return this.http.post('http://localhost:8080/give/treat',{roomid,data:false})
  }
  death=(roomid)=>{
    return this.http.post('http://localhost:8080/give/treat',{roomid,data:true})
  }

}
