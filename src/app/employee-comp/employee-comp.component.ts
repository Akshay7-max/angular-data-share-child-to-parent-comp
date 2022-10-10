import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-comp',
  templateUrl: './employee-comp.component.html',
  styleUrls: ['./employee-comp.component.css']
})
export class EmployeeCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
