import { TestBed } from '@angular/core/testing';

import { AdusersService } from './adusers.service';

describe('AdusersService', () => {
  let service: AdusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
