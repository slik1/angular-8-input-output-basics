import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentData: any;

  constructor() { }

  ngOnInit() {

    this.parentData = {
      name: 'Coolness 1',
      description: 'This is a really cool description'
    };

  }

  childChanged(parentData: any) {
    this.parentData = parentData;
  }

}
