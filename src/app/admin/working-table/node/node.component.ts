import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'working-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  index = 0;
  constructor() { }

  ngOnInit() {
  }

}
