import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sachithra-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{
  hotelName = "HIlton hotel";
  numberOfRooms = 13;
  hideRooms = false;
  constructor(){}
  ngOnInit(): void {
    
  }
  toggle(){
this.hideRooms = !this.hideRooms;
  }
}
