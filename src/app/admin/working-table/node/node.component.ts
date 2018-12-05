import { Component, OnInit } from '@angular/core';
import {fromEvent,Subscription} from "rxjs"
@Component({
  selector: '[working-node]',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  rect:{width:number,height:number,transform?:string}={
    width:200,
    height:100,
  };
  title:string="node"
  node:SVGGElement;
  event:Subscription;
  constructor() { }
  mousemove(e){
    this.rect.transform = `translate(${e.offsetX-100},${e.offsetY-50})`
  }
  mousedown(){
    this.event = fromEvent<MouseEvent>(window,'mousemove')
    .subscribe((e)=>this.mousemove(e))
  }
  mouseup($event:MouseEvent){
    this.event.unsubscribe();
  }
  ngOnInit() {
  }

}
