import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, shareReplay } from 'rxjs/operators';
import { HeadersService } from '../services/headers.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  endpoint: any;
  httpOptions: any;
  headers: HttpHeaders;

constructor(private http: HttpClient) {
  this.endpoint = 'https://localhost:44346/apitest/';
  this.headers = new HttpHeaders();

  this.headers = this.headers.set('Content-type', 'application/json; charset=utf-8');
  this.headers = this.headers.set('Accept', '*/*');
  }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getItems(): Observable<any> {
    return this.http.get(this.endpoint + 'getall', {headers: this.headers}).shareReplay();
  }
}


