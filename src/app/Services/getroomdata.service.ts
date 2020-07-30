import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetroomdataService {
  
  constructor(private http:HttpClient) { }
  getRoomdata():Observable<Data[]>
  {
    return this.http.get<Data[]>('http://localhost:8080/view/roominfo')
    
    
    
  }
}
