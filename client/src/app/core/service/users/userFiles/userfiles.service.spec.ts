import { TestBed } from '@angular/core/testing';

import { UserfilesService } from './userfiles.service';

describe('UserfilesService', () => {
  let service: UserfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
