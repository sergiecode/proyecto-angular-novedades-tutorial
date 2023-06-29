import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }


  getDatos(): Observable<Array<any>> {
    return this.http.get<Array<any>>('https://jsonplaceholder.typicode.com/posts');
  }

}
