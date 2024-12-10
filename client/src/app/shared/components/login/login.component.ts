import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../core/service/users/login/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Input() role: 'user' | 'admin' = 'user';

  myForm!: FormGroup;
  passwordInvalid: string = '';
  emailInvalid: string = '';

  private loginService = inject(LoginService);
  private router = inject(Router);

  ngOnInit() {
    this.loginForm();
  }

  loginForm() {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.required,
      ]),
    });
  }

  loginIn() {
    this.passwordInvalid = '';
    this.emailInvalid = '';

    if (this.role === 'admin') {
      this.router.navigate(['/admin/dashboard']);
      return;
    }

    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const userDetails = this.myForm.value;

    this.loginService.login(userDetails.email, userDetails.password).subscribe({
      next: (response) => {
        console.log('LoggedIn:', response);
        if (response.success) {
          this.router.navigate(['/home']);
        }
      },
      error: (error) => {
        if (error.status === 400) {
          this.passwordInvalid = 'Entered Password is Invalid';
        } else if (error.status === 401) {
          this.emailInvalid = 'Invalid Email, Please register your account';
        } else {
          console.error('Unexpected Error:', error);
        }
      },
    });
  }
}
