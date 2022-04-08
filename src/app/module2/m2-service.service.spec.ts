import { TestBed } from '@angular/core/testing';

import { M2ServiceService } from './m2-service.service';

describe('M2ServiceService', () => {
  let service: M2ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(M2ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
