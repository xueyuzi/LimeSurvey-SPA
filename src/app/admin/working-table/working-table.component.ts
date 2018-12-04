import { Component, OnInit , } from '@angular/core';
import * as d3 from "d3";
import { ApiService } from "../../api.service";
import { WorkingTableService } from "./working-table.service";
@Component({
  selector: 'app-working-table',
  templateUrl: './working-table.component.html',
  styleUrls: ['./working-table.component.scss']
})
export class WorkingTableComponent implements OnInit {
  constructor(
    public api: ApiService,
    public wService: WorkingTableService,
  ) { }
  surveys: Array<any>;
  ngOnInit() {
    this.wService.setMainCanvas(d3.select("svg"))
  }

  addNode(){
    this.wService.addNode();
  }

}
