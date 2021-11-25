import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../basic-calc/result';

@Injectable({
  providedIn: 'root'
})
export class StreamCalcService {

  constructor(private http: HttpClient) { }

  add(item: number): Observable<Result> {
    return this.http.post<Result>('http://localhost:8080/api/v1/stream/add', {item});
  }
}
