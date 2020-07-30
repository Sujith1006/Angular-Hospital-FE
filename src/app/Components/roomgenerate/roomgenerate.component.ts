import { Component, OnInit } from '@angular/core';
import { AddnewroomService} from '../../Services/addnewroom.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roomgenerate',
  templateUrl: './roomgenerate.component.html',
  styleUrls: ['./roomgenerate.component.css']
})
export class RoomgenerateComponent implements OnInit {

  constructor(private newroom:AddnewroomService) { }

  ngOnInit(): void {
  }
Onclick=()=>{

  this.newroom.addnewroom()
  .subscribe((result)=>{
    if(result['data']=='Roomadded')
    {
      Swal.fire({icon:'success',title:'New Room added'})
    }
  })
}
}
