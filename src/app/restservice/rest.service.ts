import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.http.get(route,
      {headers: this.headerService.getHeaders(header), withCredentials: true}).shareReplay();
  }

  post(route: string, header: HeaderType, payload: any): Observable<any> {
    return this.http.post(route, payload, {headers: this.headerService.getHeaders(header), withCredentials: true}).shareReplay();
  }
}
