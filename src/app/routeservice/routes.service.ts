import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  static apiVerifyLogin: string = environment.apiUrl + 'authenticate/web/login';
  static apiVerifyAntiForgeryCookie: string = environment.apiUrl + 'authenticate/web/antiforgerycookie';
  static apiVerifyLogout: string = environment.apiUrl + 'authenticate/web/logout';
  static apiGetFingerPrint: string =  environment.apiUrl + 'authenticate/getfingerprint';
  static apiTestGetAll: string  = environment.apiUrl + 'apitest/getall';
  static apiTestSave: string = environment.apiUrl + 'apitest/save';
  static apiExampleGetAll: string  = environment.apiUrl + 'example/getall/';

  constructor() { }
}
