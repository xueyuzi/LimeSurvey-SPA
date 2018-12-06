import { Injectable } from '@angular/core';
import { Selection, BaseType } from "d3"

@Injectable({
  providedIn: 'root'
})
export class WorkingTableService {

  constructor() { }
  public nodeCount:number = 0;

  addNode(){
    this.nodeCount++;
  }

  
}
