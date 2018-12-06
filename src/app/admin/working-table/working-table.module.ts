import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WorkingTableComponent} from "./working-table.component";
import { NodeComponent } from './node/node.component';
import{NodeContextComponent } from "./node/node.component";
@NgModule({
  declarations: [
    WorkingTableComponent,
    NodeComponent,
    NodeContextComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents:[
    NodeComponent,
    NodeContextComponent
  ]
})
export class WorkingTableModule { }
