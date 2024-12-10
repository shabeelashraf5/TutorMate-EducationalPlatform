import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersadComponent } from './usersad.component';

describe('UsersadComponent', () => {
  let component: UsersadComponent;
  let fixture: ComponentFixture<UsersadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
