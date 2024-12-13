import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminloggedOutGuard } from './adminlogged-out.guard';

describe('adminloggedOutGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminloggedOutGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
