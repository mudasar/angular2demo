
import {Component} from "@angular/core";
import {SimpleService} from "../services/services.module";
@Component({
    selector:'home',
    template: `<div>I am home component. 
    <widget-one [msg]="message"></widget-one>
    hello
    <widget-two></widget-two>
    <h1>Message from Service is {{message}} </h1>
    </div>
    <a href="/contact">Contact</a>
    `
})
export class HomeComponent{
    constructor(private  simpleService:SimpleService){
        this.message = simpleService.message;
    }

    message : string = "";
}