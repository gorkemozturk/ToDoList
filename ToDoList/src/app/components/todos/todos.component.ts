import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        ID: 1,
        Title: 'This is a first event.',
        IsCompleted: true
      },
      {
        ID: 2,
        Title: 'This is a second event.',
        IsCompleted: false
      },
      {
        ID: 3,
        Title: 'This is a third event.',
        IsCompleted: true
      }
    ]
  }
  
}
