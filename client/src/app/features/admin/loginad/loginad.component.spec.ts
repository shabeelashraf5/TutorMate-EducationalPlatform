import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginadComponent } from './loginad.component';

describe('LoginadComponent', () => {
  let component: LoginadComponent;
  let fixture: ComponentFixture<LoginadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
