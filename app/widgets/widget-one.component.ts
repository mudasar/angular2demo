import {Component, Input} from "@angular/core";
@Component({
    selector: 'widget-one',
    styles: [`
    *{
        font-family:"Times New Roman";
    }
    `],
    template: `this is a shared widget with name one.
        <div *ngIf="selected" >hello</div>
        <h4>{{msg}}</h4>
    `
})
export class WidgetOne{
    onInit(){
        console.log("i am called");
    }
    selected = false;
    @Input() msg;
}