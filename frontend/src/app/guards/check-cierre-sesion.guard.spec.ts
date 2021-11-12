import { TestBed } from '@angular/core/testing';

import { CheckCierreSesionGuard } from './check-cierre-sesion.guard';

describe('CheckCierreSesionGuard', () => {
  let guard: CheckCierreSesionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckCierreSesionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
