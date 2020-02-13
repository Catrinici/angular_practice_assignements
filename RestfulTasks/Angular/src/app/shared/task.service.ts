import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import ' rxjs/add/operator/toPromise';

import { Task } from './task.model';

@Injectable({
	providedIn: 'root'
})
export class TaskService {
	selectedTask: Task;
	tasks: Task[];

	constructor() { }
}
