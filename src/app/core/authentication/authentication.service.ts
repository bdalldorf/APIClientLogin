import { Injectable } from '@angular/core';
import { HeadersService, HeaderType } from '../services/headers.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RoutesService } from '../../routeservice/routes.service';
import { RestService } from 'src/app/restservice/rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private restService: RestService
    , private http: HttpClient,
     private headerService: HeadersService, ) { }

  public AuthenticateUser(username: string, password: string): Observable<any> {
    const Authentication: any = this.restService.post(RoutesService.apiVerifyLogin, HeaderType.None, {username, password});
    console.log('Authenticate User Verified');
    return Authentication;
  }
}
