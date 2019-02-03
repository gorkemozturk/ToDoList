import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoData: Todo;
  readonly todoURL = 'https://localhost:44305/api';

  constructor(private http:HttpClient) { }

  PostTodo(todoData:Todo) {
    return this.http.post(this.todoURL + '/todos', todoData)
  }
}
