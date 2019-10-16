import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentData: any;
  @Output() childData = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  emitData() {
    this.parentData.name = 'Super Cool';
    this.childData.emit(this.parentData);
  }

}
