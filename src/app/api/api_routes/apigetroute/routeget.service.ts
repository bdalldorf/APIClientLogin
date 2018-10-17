import { Injectable } from '@angular/core';
import { ApiEndpoint } from '../../api-endpoints';
import { ApiService } from 'src/app/services/api.service';

@Injectable()
export class RoutegetService extends ApiEndpoint {
  public config = {
    route   : '/apitest/getall/',
    header : HeaderType.Validation
  };
}
