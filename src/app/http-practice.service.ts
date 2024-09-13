import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from './Interfaces/reactive-forms';

@Injectable({
  providedIn: 'root'
})
export class HttpPracticeService {

  constructor(private http : HttpClient) { }

  fetchDummyProducts() : Observable<Todos[]>{
    return this.http.get<Todos[]>("https://jsonplaceholder.typicode.com/todos");
  }

}
