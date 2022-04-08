import { TestBed } from '@angular/core/testing';

import { M1ServiceService } from './m1-service.service';

describe('M1ServiceService', () => {
  let service: M1ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(M1ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
