import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../app/Components/login/login.component'
import {DashboardComponent} from '../app/Components/dashboard/dashboard.component'
import{PatientformComponent} from '../app/Components/patientform/patientform.component'
import {RoomgenerateComponent } from '../app/Components/roomgenerate/roomgenerate.component'
import{AddpatientstoroomComponent } from '../app/Components/addpatientstoroom/addpatientstoroom.component'
import {MainviewComponent} from '../app/Components/mainview/mainview.component'
import {PatientviewComponent} from '../app/Components/patientview/patientview.component'

const routes: Routes = [
  {path:'signin',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'form',component:PatientformComponent},
    {path:'generaterooms',component:RoomgenerateComponent},
    {path:'addpatienttoroom',component:AddpatientstoroomComponent},
    {path:'viewallpatients',component:PatientviewComponent}

      ]},{
        path:'',component:MainviewComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,DashboardComponent,PatientformComponent,RoomgenerateComponent,AddpatientstoroomComponent]

