import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../Services/login.service'
import { Router} from '@angular/router'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user={
  username:'',
  password:''
}
logdetails:any={}
  constructor(private login:LoginService ,private router:Router) { }
  
  ngOnInit(): void {
  }
onSubmit=()=>{
  if(this.user.username===''||this.user.password==="")
  {
    alert("All fields are mandatory")
  }
  else{
    this.login.Signedup(this.user)
    .subscribe((data)=>{
      this.logdetails=data
      console.log(data)
      if(this.logdetails['data']==="Not an user")
      {
        console.log("Loggedin")
        alert('Invalid credentials')
      }
      else{
        // console.log(this.logdetails)
        localStorage.setItem("userdetails",this.logdetails['data'])
        this.router.navigate(['/dashboard'])
      }
    
    })
  }
}
}
