import { TestBed } from '@angular/core/testing';

import { AdfolderService } from './adfolder.service';

describe('AdfolderService', () => {
  let service: AdfolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdfolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
