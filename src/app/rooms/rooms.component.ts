import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'sachithra-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{
  hotelName = "HIlton hotel";
  numberOfRooms = 13;
  hideRooms = false;

rooms :Room  = {
  totalRooms:20,
  availableRooms :10,
  bookedRooms:5
}

  constructor(){}
  ngOnInit(): void {
    
  }
  toggle(){
this.hideRooms = !this.hideRooms;
  }
}
