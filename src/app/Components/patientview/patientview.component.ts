import { Component, OnInit } from '@angular/core';
import {ViewallpatientsService} from '../../Services/viewallpatients.service'

@Component({
  selector: 'app-patientview',
  templateUrl: './patientview.component.html',
  styleUrls: ['./patientview.component.css']
})
export class PatientviewComponent implements OnInit {
allpatients:any=[]
  constructor(private viewpatients:ViewallpatientsService) { }

  ngOnInit(): void {
    this.viewpatients.viewallpatients()
    .subscribe((result)=>{
      console.log(result)
      this.allpatients=result
    })
  }

}
