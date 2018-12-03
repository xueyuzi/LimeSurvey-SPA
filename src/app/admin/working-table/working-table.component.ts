import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
import { ApiService } from "../../api.service";
@Component({
  selector: 'app-working-table',
  templateUrl: './working-table.component.html',
  styleUrls: ['./working-table.component.scss']
})
export class WorkingTableComponent implements OnInit {

  constructor(public api: ApiService) { }
  surveys: Array<any>;
  ngOnInit() {
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

    // d3.select("svg")
    //   .selectAll("g")
    //   .data([4, 8, 15, 16, 23, 42])
    //   .enter()
    //   .append("g")
  }

}
