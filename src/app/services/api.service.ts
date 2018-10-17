import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: Http) {}

  public getAll(item: string) {
    return this.http.get(API_URL + '/apitest/getall/');
  }

  public create(item: number) {
    this.http.post(API_URL + '/apitest/save/', item);
  }

  public getById(id: number) {
    return this.http.get(API_URL + '/apitest/get/' + id);
  }

  public update(item: any) {
    // will use this.http.put()
  }

  public deleteById(id: number) {
    return this.http.get(API_URL + 'apitest/delete/' + id);
  }
}
