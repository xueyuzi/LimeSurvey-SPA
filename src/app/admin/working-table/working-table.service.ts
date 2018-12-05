import { Injectable } from '@angular/core';
import { Selection, BaseType } from "d3"

@Injectable({
  providedIn: 'root'
})
export class WorkingTableService {
  // 用于组合各组件到画布上
  private MainCanvas: Selection<BaseType, {}, HTMLElement, any>;

  constructor() { }
  setMainCanvas(selection: Selection<BaseType, {}, HTMLElement, any>) {
    this.MainCanvas = selection;
  }

  addNode(){
    this.MainCanvas.append("g")
  }

  
}
