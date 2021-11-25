import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamCalcService {

  constructor(private http: HttpClient) { }

  add(item: number): Observable<number> {
    return this.http.post<number>('http://localhost:8080/api/v1/stream/add', {item});
  }
}
