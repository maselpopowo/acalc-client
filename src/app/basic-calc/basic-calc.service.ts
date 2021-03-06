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

  add(operation: Operation): Observable<string> {
    return this.http.post<Result>('http://localhost:8080/api/v1/add', operation)
      .pipe(
        map(result => Number.parseFloat(result.value).toFixed(2)),
      )
  }

  subtract(operation: Operation): Observable<string> {
    return this.http.post<Result>('http://localhost:8080/api/v1/subtract', operation)
      .pipe(
        map(result => Number.parseFloat(result.value).toFixed(2)),
      )
  }

  divide(operation: Operation): Observable<string> {
    return this.http.post<Result>('http://localhost:8080/api/v1/divide', operation)
      .pipe(
        map(result => Number.parseFloat(result.value).toFixed(2)),
      )
  }

  multiply(operation: Operation): Observable<string> {
    return this.http.post<Result>('http://localhost:8080/api/v1/multiply', operation)
      .pipe(
        map(result => Number.parseFloat(result.value).toFixed(2)),
      )
  }
}
