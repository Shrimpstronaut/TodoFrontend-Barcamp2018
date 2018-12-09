import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Task} from '../models/task';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:8000/api/todos');
  }

}
