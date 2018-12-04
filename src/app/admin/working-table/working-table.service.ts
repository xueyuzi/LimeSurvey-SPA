import { Injectable } from '@angular/core';
import {Selection,BaseType} from "d3";
@Injectable({
  providedIn: 'root'
})
export class WorkingTableService {
  mainCanvas:Selection<BaseType, {}, HTMLElement, any>;
  
  setCanvas(canvas:Selection<BaseType, {}, HTMLElement, any>){
    this.mainCanvas = canvas;
  }
}
