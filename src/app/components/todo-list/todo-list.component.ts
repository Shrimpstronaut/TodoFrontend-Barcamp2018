import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Task} from '../../models/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {

  tasks: Task[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.findAll().subscribe((value: Task[]) => {
      this.tasks = value;
    });
  }

}
