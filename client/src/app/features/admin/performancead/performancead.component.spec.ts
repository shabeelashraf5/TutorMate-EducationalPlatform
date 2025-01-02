import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceadComponent } from './performancead.component';

describe('PerformanceadComponent', () => {
  let component: PerformanceadComponent;
  let fixture: ComponentFixture<PerformanceadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
