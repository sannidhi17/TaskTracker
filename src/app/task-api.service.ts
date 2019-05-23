import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskListApiService {

  url = 'http://localhost:3000/tasks';

  constructor(private http:HttpClient) { }

  getTaskList() {
    return this.http.get(this.url);
  }

  getTaskByID(id: string) {
    return this.http.get(this.url + ':' + id);
  }

  AddTask(name: string, status: string) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application-json'
      })
    }
    let body = {
      'name': name,
      'status': status
    }
    return this.http.post(this.url, body, httpOptions);
  }

  EditTask(id: string, name: string, status: string) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application-json'
      })
    }
    let body = {
      'name': name,
      'status': status
    }
    return this.http.put(this.url + ':' + id, body, httpOptions);
  }

  DeleteTask(id: string) {
    return this.http.delete(this.url + ':' + id);
  }

}
