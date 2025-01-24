import { Injectable } from '@angular/core';

export interface Question {
  question: string;
  options: string[];
  answer: number; // Index of the correct answer
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  private questions: Question[] = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
      answer: 2,
    },
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      answer: 1,
    },
    {
      question: 'Which language is used for Angular?',
      options: ['Python', 'Java', 'TypeScript', 'Ruby'],
      answer: 2,
    },
  ];

  getQuestions(): Question[] {
    return this.questions;
  }
}
