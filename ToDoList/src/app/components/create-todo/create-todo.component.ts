import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  constructor(private todoService: TodoService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.todoService.PostTodo(form.value).subscribe(
      res => {
        console.log(res);
        this.toastr.success('You have been submitted the event successfully.');
        form.form.reset();
      },
      err => {
        console.log(err)
      }
    )
  }

}
