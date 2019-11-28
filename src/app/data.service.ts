import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:9898/emps';
  constructor(private http : HttpClient) { }
  select()
  {
    return this.http.get(this.url);
  }
}
