import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceadComponent } from './attendancead.component';

describe('AttendanceadComponent', () => {
  let component: AttendanceadComponent;
  let fixture: ComponentFixture<AttendanceadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
