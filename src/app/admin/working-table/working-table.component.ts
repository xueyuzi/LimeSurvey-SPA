import { Component, OnInit, ViewChild, ViewContainerRef ,ComponentFactory ,ComponentFactoryResolver} from '@angular/core';
import * as d3 from "d3";
import { ApiService } from "../../api.service";
import { WorkingTableService } from "./working-table.service";
import {NodeComponent} from "./node/node.component"
@Component({
  selector: 'app-working-table',
  templateUrl: './working-table.component.html',
  styleUrls: ['./working-table.component.scss']
})
export class WorkingTableComponent implements OnInit {
  @ViewChild("vc", { read: ViewContainerRef }) vc: ViewContainerRef;
  private nodeFactor:ComponentFactory<NodeComponent>
  constructor(
    public api: ApiService,
    public wService: WorkingTableService,
    private resolver:ComponentFactoryResolver
  ) {
    this.nodeFactor = this.resolver.resolveComponentFactory(NodeComponent);
   }
  surveys: Array<any>;
  ngOnInit() {
  }

  addNode() {
      this.vc.createComponent(this.nodeFactor);
      this.wService.addNode();
  }

}
