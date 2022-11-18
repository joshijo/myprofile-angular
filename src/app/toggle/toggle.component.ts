import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
 isDisplay:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  toggleClick(){
    this.isDisplay=!this.isDisplay;
  }
}
