import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { NgForm } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService: TodoService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  setClass() {
    let cls = {
      todo: true,
      'is-completed': this.todo.IsCompleted
    }

    return cls;
  }

  onToggle(todo: Todo) {
    todo.IsCompleted = !todo.IsCompleted;

    this.todoService.PutTodo(todo).subscribe(
      res => {
        this.toastr.success('You have been updated the event successfully.');
      },
      err => {
        console.log(err)
      }
    );
  }

}
