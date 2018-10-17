import { TestBed } from '@angular/core/testing';

import { RoutegetService } from './routeget.service';

describe('RoutegetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutegetService = TestBed.get(RoutegetService);
    expect(service).toBeTruthy();
  });
});
