import { Component, OnInit ,ViewChild,ViewContainerRef,ComponentFactoryResolver,ComponentFactory,Input} from '@angular/core';
import {fromEvent,Subscription} from "rxjs"
import {WorkingTableService} from "../working-table.service"
@Component({
  selector: 'svg:svg[working-node]',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @ViewChild("vc", {read: ViewContainerRef}) vc: ViewContainerRef;
  
  transform:string
  title:string="node"
  event:Subscription;
  contextFactor:ComponentFactory<NodeContextComponent>;
  contextCount:number = 1;
  constructor(
    private wService:WorkingTableService,
    private resolver:ComponentFactoryResolver
    ) {
    this.contextFactor = this.resolver.resolveComponentFactory(NodeContextComponent);
  }
  mousemove(e){
    this.transform = `translate(${e.offsetX-100},${e.offsetY-50})`
  }
  mousedown(){
    this.event = fromEvent<MouseEvent>(window,'mousemove')
    .subscribe((e)=>this.mousemove(e))
  }
  mouseup($event:MouseEvent){
    this.event.unsubscribe();
  }
  ngOnInit() {
    this.title = this.title + this.wService.nodeCount;
  }

  addContext(){
    console.log("context")
    this.contextCount++;
    const ref = this.vc.createComponent(this.contextFactor,0)
    ref.instance.contextCount = this.contextCount;
  }

}



@Component({
  selector: 'svg:svg[node-context]',
  template: `<svg:g>
  <svg:text [attr.x]="20" [attr.y]="25*contextCount" fill="white" class="text" >{{context}}</svg:text>
  </svg:g>`
})
export class NodeContextComponent{
  context = "no.1"
  @Input() contextCount:number;
}
