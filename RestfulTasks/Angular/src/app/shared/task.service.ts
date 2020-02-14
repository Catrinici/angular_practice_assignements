import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import ' rxjs/add/operator/toPromise';

import { Task } from './task.model';

@Injectable({
	providedIn: 'root'
})
export class TaskService {
	selectedTask: Task;
	tasks: Task[];
	readonly baseURL = 'http://localhost:8000/tasks';

	constructor(private http: HttpClient) { }

	postTask(task: Task) {
		return this.http.post(this.baseURL, task);
	}

	getTaskList() {
		return this.http.get(this.baseURL);
	}

	putTask(task: Task) {
		return this.http.put(this.baseURL + `/${task._id}`, task);
	}

	deleteTask(_id: string) {
		return this.http.delete(this.baseURL + `/${_id}`);
	}
}
