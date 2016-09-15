import {Component} from "@angular/core";
@Component({
    selector: 'widget-two',
    template: `<div>this is a shared widget with name two.
        </div>
    `
})
export class WidgetTwo{
    onInit(){
        console.log("i am called");
    }
    selected = false;
}