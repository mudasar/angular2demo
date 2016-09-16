import {Injectable} from "@angular/core";
import {TodoModel} from "./todo";

@Injectable()
export class TodoService{
    todos = [ new TodoModel("Eat"), new TodoModel("Sleep"), new TodoModel("Code")];
}