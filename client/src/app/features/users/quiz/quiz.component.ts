import { Component } from '@angular/core';
import { UserNavbarComponent } from '../../../core/layout/navbar/user-navbar/user-navbar.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [UserNavbarComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent {}
