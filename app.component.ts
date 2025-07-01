import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  tasks: any[] = [];
  newTitle = '';
  assignedTo = '';
  token = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.token = 'YOUR_JWT_TOKEN'; // Replace with real token from login
    this.loadTasks();
  }

  loadTasks() {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    this.http.get<any[]>('http://localhost:3000/tasks', { headers }).subscribe(data => {
      this.tasks = data;
    });
  }

  addTask() {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    this.http.post('http://localhost:3000/tasks', {
      title: this.newTitle,
      assignedTo: this.assignedTo
    }, { headers }).subscribe(() => {
      this.loadTasks();
      this.newTitle = '';
      this.assignedTo = '';
    });
  }
}
