import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../../core/service/users/login/login.service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../../shared/components/login/login.component';
import { AdminloginService } from '../../../core/service/admin/adminlogin.service';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-loginuser',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, NavbarComponent],
  templateUrl: './loginuser.component.html',
  styleUrl: './loginuser.component.css',
})
export class LoginuserComponent {
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

    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const userDetails = this.myForm.value;
    this.loginService.login(userDetails.email, userDetails.password).subscribe({
      next: (response) => {
        if (response.success && response.role) {
          this.router.navigate(['/users/home']);
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
