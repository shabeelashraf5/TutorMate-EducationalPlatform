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
import { AdminloginService } from '../../../core/service/admin/adminlogin.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // @Input() role: 'user' | 'admin' = 'user';
  // myForm!: FormGroup;
  // passwordInvalid: string = '';
  // emailInvalid: string = '';
  // private loginService = inject(LoginService);
  // private router = inject(Router);
  // private adminLoginService = inject(AdminloginService);
  // ngOnInit() {
  //   this.loginForm();
  // }
  // loginForm() {
  //   this.myForm = new FormGroup({
  //     email: new FormControl('', [Validators.email, Validators.required]),
  //     password: new FormControl('', [
  //       Validators.minLength(6),
  //       Validators.required,
  //     ]),
  //   });
  // }
  // loginIn() {
  //   this.passwordInvalid = '';
  //   this.emailInvalid = '';
  //   if (this.role === 'admin') {
  //     const adminDetails = this.myForm.value
  //     this.adminLoginService.login(adminDetails.email, adminDetails.password).subscribe({
  //       next: (response) => {
  //         if(response.success){
  //           this.router.navigate(['/admin/dashboard']);
  //           return;
  //         }
  //       },
  //       error: (error) => {
  //         if (error.status === 400){
  //           this.passwordInvalid = 'Entered Password is Invalid';
  //         }else if( error.status === 401){
  //           this.emailInvalid = 'Invalid Email, Please register your account';
  //         }else{
  //           console.error('Unexpected Error:', error);
  //         }
  //       }
  //     })
  //   }
  //   if (this.myForm.invalid) {
  //     this.myForm.markAllAsTouched();
  //     return;
  //   }
  //   const userDetails = this.myForm.value;
  //   this.loginService.login(userDetails.email, userDetails.password).subscribe({
  //     next: (response) => {
  //       console.log('LoggedIn:', response);
  //       if (response.success) {
  //         this.router.navigate(['/home']);
  //       }
  //     },
  //     error: (error) => {
  //       if (error.status === 400) {
  //         this.passwordInvalid = 'Entered Password is Invalid';
  //       } else if (error.status === 401) {
  //         this.emailInvalid = 'Invalid Email, Please register your account';
  //       } else {
  //         console.error('Unexpected Error:', error);
  //       }
  //     },
  //   });
  // }
  // loginIn() {
  //   this.passwordInvalid = '';
  //   this.emailInvalid = '';
  //   if (this.myForm.invalid) {
  //     this.myForm.markAllAsTouched();
  //     return;
  //   }
  //   // ** Admin Login Logic **
  //   if (this.role === 'admin') {
  //     const adminDetails = this.myForm.value;
  //     this.adminLoginService
  //       .login(adminDetails.email, adminDetails.password)
  //       .subscribe({
  //         next: (response) => {
  //           if (response.success) {
  //             this.router.navigate(['/admin/dashboard']);
  //             return; // ** This ensures user logic is skipped **
  //           }
  //         },
  //         error: (error) => {
  //           if (error.status === 400) {
  //             this.passwordInvalid = 'Entered Password is Invalid';
  //           } else if (error.status === 401) {
  //             this.emailInvalid = 'Invalid Email, Please register your account';
  //           } else {
  //             console.error('Unexpected Error:', error);
  //           }
  //         },
  //       });
  //     return;
  //   }else if(this.role === 'user'){
  //   const userDetails = this.myForm.value;
  //   this.loginService.login(userDetails.email, userDetails.password).subscribe({
  //     next: (response) => {
  //       if (response.success) {
  //         this.router.navigate(['/home']);
  //       }
  //     },
  //     error: (error) => {
  //       if (error.status === 400) {
  //         this.passwordInvalid = 'Entered Password is Invalid';
  //       } else if (error.status === 401) {
  //         this.emailInvalid = 'Invalid Email, Please register your account';
  //       } else {
  //         console.error('Unexpected Error:', error);
  //       }
  //     },
  //   });
  // }
  // }
}
