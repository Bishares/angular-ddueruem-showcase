import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class FeatureModelService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
