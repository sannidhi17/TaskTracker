import { Component } from '@angular/core';
import { TaskListApiService } from './task-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Tracker';
  pending_tasks = [];
  ongoing_tasks = [];
  completed_tasks = [];
  all_tasks = [];

  constructor(private taskapi: TaskListApiService) { }

  ngOnInit() {
    this.taskapi.getTaskList().subscribe(data =>
      {
        let p = 0, o = 0, c = 0;
        for (var task of data) {
          if (task.status[0] === "pending") {
            this.pending_tasks[p] = task.name;
            p = p + 1;
          } else if (task.status[0] === "ongoing") {
            this.ongoing_tasks[o] = task.name;
            o = o + 1;
          } else {
            this.completed_tasks[c] = task.name;
            c = c + 1;
          }
        }
        console.log(data);
      },
      err => {
        console.log("error!! :(");
      }
    );
  }

}
