import { Component, OnInit } from '@angular/core';
import { UserNavbarComponent } from '../../../core/layout/navbar/user-navbar/user-navbar.component';
import { Question, QuizService } from '../../../core/service/users/quiz/quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [UserNavbarComponent, CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent implements OnInit {

  questions: Question[] = [];
  currentQuestionIndex = 0;
  userAnswers: number[] = [];
  showResults = false;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.questions = this.quizService.getQuestions();
  }

  selectAnswer(optionIndex: number): void {
    this.userAnswers[this.currentQuestionIndex] = optionIndex;
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.showResults = true;
    }
  }

  calculateScore(): number {
    return this.userAnswers.filter(
      (answer, index) => answer === this.questions[index].answer
    ).length;
  }

}
