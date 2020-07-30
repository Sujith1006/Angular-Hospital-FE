import { Component, OnInit } from '@angular/core';
import { PatientinfoService } from '../../Services/patientinfo.service'
import swal from 'sweetalert2';
import saveas from 'file-saver'
import {FormGroup,FormControl,Validators} from '@angular/forms'
import io from 'socket.io-client'
@Component({
  selector: 'app-patientform',
  templateUrl: './patientform.component.html',
  styleUrls: ['./patientform.component.css']
})
export class PatientformComponent implements OnInit {
 
  submit=false
  sock=io.connect('http://localhost:8080/sujith')
  patient=new FormGroup({
     name: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    phonenumber: new FormControl('',Validators.required),
    bloodgroup: new FormControl('',Validators.required),
    symptoms: new FormControl('',Validators.required),
  })

  constructor(private form: PatientinfoService) { }

  ngOnInit(): void {
  }
  get f() { return this.patient.controls; }

  SubmitPatienRecords = () => {
    this.submit=true
    console.log( this.patient.value,this.patient.status)
       
    if (this.patient.status==='INVALID') {
      swal.fire({icon:'error',title:'Please fill all the fields correctly'})
    }
    else {
      this.form.AddnewPatient(this.patient.value)
        .subscribe((data) => {
          console.log(data)
          if(data['res']==="Inserted Successfully")
          {
            this.form.getpdf()
          .subscribe((res)=>{
            console.log(res)
            const blobdata=new Blob([res],{type:'application/pdf'})
          saveas(blobdata,`${this.patient['name']}.pdf`)
          })
          swal.fire({icon:'success',title:'Success'})
          this.patient.reset()
            this.submit=false
          }
          else if(data['data']==='Need Room For patients')
          {
            // console.log("Income")
              swal.fire({icon:'error',title:'Already Patients are in waiting list'})
          }  
          if(data['room']=='allocated')
          {
            this.sock.emit('addpatients',{data:true})
          }
        })
    }
  }

}
