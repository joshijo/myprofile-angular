import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
 cartStatus:number=0;
  constructor() { }

  ngOnInit(): void {
  }
add(){
  this.cartStatus=++ this.cartStatus;
}
remove(){
  this.cartStatus=--this.cartStatus;
}
}