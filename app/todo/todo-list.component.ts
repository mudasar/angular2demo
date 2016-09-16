import {Component} from "@angular/core";
import {TodoService} from "./todo.service";


@Component({
    selector: 'todo-list',
    styles:[`{
        .completed{
            text-decoration:line-through;
        }
    }`],
    template: ` <ul>
        <li *ngFor="let todo of todoService.todos; let i=index">
            <span  [ngClass]="todo.status">{{todo.title}}</span> <button (click)="todo.toggle()">Mark Done</button>
            <!--[hidden]="todo.status=='completed'"-->
        </li>
    </ul>`
})
export class TodoListComponent{
    constructor(public todoService:TodoService){}
}