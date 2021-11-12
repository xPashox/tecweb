import { TestBed } from '@angular/core/testing';

import { CheckInicioSesionGuard } from './check-inicio-sesion.guard';

describe('CheckInicioSesionGuard', () => {
  let guard: CheckInicioSesionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckInicioSesionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
