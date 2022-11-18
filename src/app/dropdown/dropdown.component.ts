import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
mountainList:string='';
  constructor() { }

  ngOnInit(): void {
  }
  setvalue(drpList:any){    
    this.mountainList=drpList.target.value;    
  }    
}
