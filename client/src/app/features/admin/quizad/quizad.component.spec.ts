import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizadComponent } from './quizad.component';

describe('QuizadComponent', () => {
  let component: QuizadComponent;
  let fixture: ComponentFixture<QuizadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
