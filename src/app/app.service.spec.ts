import { TestBed } from '@angular/core/testing';

import { AppServiceTsService } from './app.service.ts.service';

describe('AppServiceTsService', () => {
  let service: AppServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
