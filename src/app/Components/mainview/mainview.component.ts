import { Component, OnInit } from '@angular/core';
import { GetroomdataService } from '../../Services/getroomdata.service'
import { GivemedicationService } from '../../Services/givemedication.service'
import Swal from 'sweetalert2';
import io from 'socket.io-client'
@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {
  death=0;
  totalrooms: any = []
  roomallocated: []
  roomid: any = []
  patientname: any = []
  patientadmitted = null
  patientrecovered = null
  timerarray: any = []
  text = false
  patienttimeofadmit: any = []
  emergency: any = []
  notificationarray: any = []
  dataflag=true;
  data;
backenddata;
  sock = io.connect("http://localhost:8080/sujith")
  constructor(private rooms: GetroomdataService, private treat: GivemedicationService) {
  
   }

 async  ngOnInit() { 
    this.sock.on('notification', (data) => {
      // this.notificationarray.push(data.data)   
      console.log(data)
    })
  this.Initial();
  }
  
  Initial=async()=>{
  this.sock.emit('demo',{data:true})
this.sock.on('demodata',async(data)=>
{

  console.log(data)
  this.totalrooms = []
  this.roomallocated = []
  this.roomid = []
  this.patientname = []
  this.patientadmitted = null
  this.patientrecovered = null
  this.timerarray = []
  this.patienttimeofadmit = []
  this.backenddata= await data;
  if(data.data.length!=0)
  await this.getRooms(this.backenddata)

})

  }
  
  startTimer = () => {
    // window.location.reload()
    console.log(this.patienttimeofadmit.length)
    if(this.patienttimeofadmit.length>0)
    {
    setInterval(() => {
      let newdate = new Date()
      let newsec = newdate.getSeconds()
      this.patienttimeofadmit.map((ele, ind) => {
        let admiteddate = new Date(ele.data)
        let admitedsec = admiteddate.getSeconds() 
        let timer;
        // console.log(newsec,admitedsec)
        if (newsec > admitedsec) {
          timer = newsec - admitedsec
        }
        else if (newsec < admitedsec) {
          timer = (60 - admitedsec) + newsec
          if (this.emergency[ind] == true) {
            this.emergency[ind] = false
          }
        }
        else {
          timer = 0 
          ele.counter = ele.counter + 1
        }
        this.timerarray[ind] = { timer: timer, counter:ele.counter}
      console.log(this.timerarray)
      })
    }, 1000)
    }
    
  }

  emergencycall = (index, sec) => {
    // console.log(this.patientname[index])
    this.sock.emit('emergency', {
      time: 60 - sec,
      patientname: this.patientname[index]
    })

  }
  getRooms = async(result) => {
    console.log("Income")
    console.log(result)
    this.totalrooms = result['data']
    this.roomallocated = result['roomallocated']
    this.roomallocated.map((ele) => {
      if (ele['Patientstatus'] == true) {
        this.patienttimeofadmit.push({ data: ele['createdAt'], counter: 0 })
        this.roomid.push(ele['Roomid']['id'])
        // this.sock.emit('addpatients', { data: true })
        console.log(this.roomid)
        this.patientname.push(ele['Personid']['Patientname'])
      }
      else {
        this.patientrecovered = this.patientrecovered + 1
      }
    })
    this.patientadmitted = this.roomid.length
    let tempallocated=this.roomallocated
    console.log(this.roomallocated.length,tempallocated)
   if(this.dataflag==true){
  await  this.startTimer()
  this.dataflag=false;
   }
   
  }
 
  giveMedication = (roomid, counter, index) => {
    console.log(roomid, counter)
    this.emergency[index] = true;
    this.treat.addtreatment(roomid)
      .subscribe((result) => {
        console.log("res", result['medrounds'], this.timerarray[counter]['counter'])

        if (result['medrounds'] == 3 && this.timerarray[counter]['counter'] == 3) {
          this.treat.death(roomid)
          .subscribe((res)=>{
            console.log(res)
            this.sock.emit('demo', { data: true })
          })
          Swal.fire({
            title: 'Patient recovered successfully',
            icon: 'success'
          })
    
        }
        else if (result['medrounds'] === this.timerarray[counter]['counter']) {
          Swal.fire({
            title: 'Need treatment',
            icon: 'success'
          })
        }
        else {
          if (result['medrounds'] > this.timerarray[counter]['counter']) {
            this.treat.death(roomid)
              .subscribe((res) => {
                console.log(res)
                this.sock.emit('demo', { data: true })
              })
              this.death=this.death+1
            Swal.fire({
              title: 'Over Dosage,Patient Dies',
              icon: 'warning'
            })
          }
          else {
            this.treat.death(roomid)
              .subscribe((res) => {
                // console.log(res)
                // this.ngOnInit()
                this.sock.emit('demo', { data: true })
              })
              this.death=this.death+1
            Swal.fire({
              title: 'Patient Died',
              icon: 'error'
            })

          }

        }
      })
  }

}
