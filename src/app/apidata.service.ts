import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IData } from './home/data';

const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

@Injectable({
  providedIn: 'root'
})


export class ApidataService {

  daata;

  constructor(private http:HttpClient) { }

  public getApi(): Observable<any>{
    return this.http.get(baseUrl);
  
    }
}
