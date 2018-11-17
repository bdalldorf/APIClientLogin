import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HeadersService, HeaderType} from '../core/services/headers.service';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/shareReplay';

@Injectable({
  providedIn: 'root'
})

export class RestService {
  private headerService: HeadersService;

constructor(private http: HttpClient) {
  this.headerService = new HeadersService();
  }

  get(route: string, header: HeaderType): Observable<any> {
    return this.http.get(environment.apiUrl + route,
      {headers: this.headerService.getHeaders(header)}).shareReplay();
  }

  post(route: string, header: HeaderType, id: number): Observable<any> {
    return this.http.post(environment.apiUrl + route, id, {headers: this.headerService.getHeaders(header)}).shareReplay();
  }
}
