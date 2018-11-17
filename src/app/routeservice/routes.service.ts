import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  static apiVerifyLogin = environment.apiUrl + 'authenticate/login';
  static apiTestGetAll = environment.apiUrl + 'apitest/getall';
  static apiTestSave = environment.apiUrl + 'apitest/save';

  constructor() { }
}
