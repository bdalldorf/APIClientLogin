import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  static apiVerifyLogin = 'authenticate/login';
  static apiTestGetAll = 'apitest/getall';
  static apiTestSave = 'apitest/save';

  constructor() { }
}
