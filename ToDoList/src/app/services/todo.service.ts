import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoData: Todo;
  readonly todoURL = 'https://localhost:44305/api';
  todos: Todo[]; 

  constructor(private http:HttpClient) { }

  PostTodo(todoData: Todo) {
    return this.http.post(this.todoURL + '/todos', todoData)
  }

  GetTodos() {
    return this.http.get(this.todoURL + '/todos').toPromise().then(res => this.todos = res as Todo[]);
  }

  PutTodo(todoData: Todo) {
    return this.http.put(this.todoURL + '/todos/' + todoData.ID, todoData)
  }

}
