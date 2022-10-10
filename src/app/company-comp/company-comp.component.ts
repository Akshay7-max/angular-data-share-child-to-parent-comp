import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-comp',
  templateUrl: './company-comp.component.html',
  styleUrls: ['./company-comp.component.css']
})
export class CompanyCompComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
