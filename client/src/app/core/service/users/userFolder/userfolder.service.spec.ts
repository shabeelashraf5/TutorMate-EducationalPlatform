import { TestBed } from '@angular/core/testing';

import { UserfolderService } from './userfolder.service';

describe('UserfolderService', () => {
  let service: UserfolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserfolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
