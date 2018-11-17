import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { HeaderType, HeadersService} from '../core/services/headers.service';
import { environment } from '../../environments/environment';
import { Credentials } from '../models/credentials.models';
import { RoutesService } from '../routeservice/routes.service';

@Injectable({
  providedIn: 'root'
})
export class SessionDataService {
  private headerService: HeadersService;

constructor(private http: HttpClient) {
  this.headerService = new HeadersService();
  }

  login(credentials: Credentials) {
    console.log(credentials);
    return timer(300).pipe(mapTo({name: credentials.username, token: credentials.token, fingerPrint: credentials.fingerPrint }));
  }

  verifyUser(credentials: Credentials): Observable<any> {
    return this.http.post(environment.apiUrl + RoutesService.apiVerifyLogin, {body: credentials},
      {headers: this.headerService.getHeaders(HeaderType.None)}).shareReplay();
  }
}
