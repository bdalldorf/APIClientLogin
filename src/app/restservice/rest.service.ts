import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, shareReplay } from 'rxjs/operators';
import { HeadersService, HeaderType} from './headers.service';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeLast';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/withLatestFrom';

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

  post(route: string, header: HeaderType): Observable<any> {
    return this.http.post(environment.apiUrl + route,
      {headers: this.headerService.getHeaders(header)}).shareReplay();
  }
}
