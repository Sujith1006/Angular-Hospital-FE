import { Component, OnInit } from '@angular/core';
import {ViewpatientsService} from '../../Services/viewpatients.service'
import {AddnewroomService} from '../../Services/addnewroom.service'
import Swal from 'sweetalert2';
import io from 'socket.io-client'
@Component({
  selector: 'app-addpatientstoroom',
  templateUrl: './addpatientstoroom.component.html',
  styleUrls: ['./addpatientstoroom.component.css']
})
export class AddpatientstoroomComponent implements OnInit {
  patients=[]
  room=[]
  selectedPatient:any={}
  selectedRoom:any={}
  showblock=false
  sock=io.connect("http://localhost:8080/sujith")
  constructor(private patientinfo:ViewpatientsService ,
    private Newroom:AddnewroomService) { }

  ngOnInit(): void {
      this.patientinfo.getPatients()
      .subscribe((result)=>{
        console.log(result)
        this.patients=result['patientdata']
        this.room=result['roomdata']
      })
      // console.log(this.patients)
  
}

Assignroom=(data,i)=>{
  console.log('data')
console.log(data,this.room)
this.selectedPatient=data
this.showblock=!this.showblock
}
closediv=()=>{
this.showblock=!this.showblock

}
addroomtopatient=(data,ind)=>{
  this.showblock=!this.showblock
  Swal.fire({
    text: `Adding ${this.selectedPatient['Patientname']} to roomid ${data['id']} ?`,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.value) {
      this.selectedRoom=data;
      console.log(this.selectedRoom,this.selectedPatient)
      this.Newroom.addtomedicaltable(this.selectedPatient)
      .subscribe((data)=>{
        console.log(data)
      })
      this.Newroom.addpatienttorooms(data,this.selectedPatient)
      .subscribe((result)=>{
        if(result['data']==='Success')
        {
        this.sock.emit('addpatients',{data:true})
        this.ngOnInit();
          Swal.fire({text:"Room allocated",
        icon:'success'}) 
        }
        else{
          Swal.fire({text:"Room not allocated",
        icon:'error'})
        }
      })
    }
  })
 
}
}
