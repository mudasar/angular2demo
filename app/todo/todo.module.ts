import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TodoComponent} from './todo.component';
import {todoRoutes} from './todo.routes';
import{TodoListComponent} from './todo-list.component';

@NgModule({
    imports: [CommonModule, FormsModule, todoRoutes],
    declarations: [TodoComponent,TodoListComponent],
    exports: [TodoComponent,TodoListComponent]
})
export class TodoModule{}