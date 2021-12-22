import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSedeComponent } from './admin-sede.component';

describe('AdminSedeComponent', () => {
  let component: AdminSedeComponent;
  let fixture: ComponentFixture<AdminSedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
