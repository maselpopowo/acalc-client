import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operation } from './operation';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class BasicCalcService {

  constructor(private http: HttpClient) {
  }

  add(operation: Operation): Observable<number> {
    return this.http.post<Result>('http://localhost:8080/api/v1/add', operation)
      .pipe(
        map(result => result.value)
      )
  }

  subtract(operation: Operation): Observable<number> {
    return this.http.post<Result>('http://localhost:8080/api/v1/subtract', operation)
      .pipe(
        map(result => result.value)
      )
  }
}
