import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
import { ApiService } from "../../api.service";
import {WorkingTableService} from "./working-table.service";
@Component({
  selector: 'app-working-table',
  templateUrl: './working-table.component.html',
  styleUrls: ['./working-table.component.scss']
})
export class WorkingTableComponent implements OnInit {

  constructor(
    public api: ApiService,
    public workingTableService:WorkingTableService
  ) { }
  surveys: Array<any>;
  ngOnInit() {
    this.workingTableService.setCanvas(d3.select("svg"));
    this.api.list_surveys()
      .then(result => {
        this.surveys = result
      })
      .then(() => {
        d3.select("svg")
          .selectAll("g")
          .data(this.surveys.map(survey => survey.surveyls_title))
          .enter()
          .append("g")
      })
  }

}
