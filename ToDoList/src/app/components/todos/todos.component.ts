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
        id: 1,
        title: 'This is a first event.',
        isCompleted: true
      },
      {
        id: 2,
        title: 'This is a second event.',
        isCompleted: false
      },
      {
        id: 3,
        title: 'This is a third event.',
        isCompleted: true
      }
    ]
  }
  
}
