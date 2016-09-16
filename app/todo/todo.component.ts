import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TodoModel} from './todo';
import {TodoService} from "./todo.service";


@Component({
    selector: "todo",
    styles: [],
    template: `<div>this is todo component / module  ... work in progress</div>
    <div>
       <form (submit)="onSubmit()">
        <input type="text" [(ngModel)]="todoModel.title" name="myInput" /> {{todoModel.title}}
            <!--<button (click)="addTodo()" >Add New</button>-->
       </form>
            
    </div>
    <todo-list></todo-list>
    `,
    providers: [TodoService]
})
export class TodoComponent{
    constructor(public todoService: TodoService){}

    //@Input() myInput = "";
    todoModel:TodoModel = new TodoModel();
    myInput = "";

    onSubmit: function(){
    console.log(this.myInput);
        this.todoService.todos.push(this.todoModel);
        console.log(this.todoService.todos);
        this.todoModel = new TodoModel("");
    }
}