import { Injectable } from '@angular/core';
import { ApiEndpoint } from '../../api-endpoints';

@Injectable()
export class RoutegetService extends ApiEndpoint {
  public config = {
    route   : '/apitest/getall/',
    header : HeaderType.Validation
  };
}
