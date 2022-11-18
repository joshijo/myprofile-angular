import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css'],
})
export class AddListComponent implements OnInit {
  productList: string[] = ['Apple', 'orange', 'mango'];
  pdtNames: string = '';
  constructor() {}

  ngOnInit(): void {}

  addProduct() {
    this.productList.push(this.pdtNames);
    this.pdtNames='';
  }
}
