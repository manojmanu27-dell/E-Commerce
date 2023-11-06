import { TestBed } from '@angular/core/testing';

import { HttpServiceArgsService } from './http-service-args.service';

describe('HttpServiceArgsService', () => {
  let service: HttpServiceArgsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpServiceArgsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
