import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AdminloginService } from '../../../core/service/admin/adminlogin.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule, NavbarComponent],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent implements OnInit {

   myForm!: FormGroup;
    passwordInvalid: string = '';
    emailInvalid: string = '';
  
    isAdminLogged!: Observable<boolean>;
    isAdminDropdownOpen: boolean = false;
    private adminLoginService = inject(AdminloginService);
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
  
    adminLoginIn() {
      this.passwordInvalid = '';
      this.emailInvalid = '';
  
      if (this.myForm.invalid) {
        this.myForm.markAllAsTouched();
        return;
      }
  
      const userDetails = this.myForm.value;
      this.adminLoginService
        .login(userDetails.email, userDetails.password)
        .subscribe({
          next: (response) => {
            if (response.success && response.role) {
              this.router.navigate(['/admin/dashboard']);
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
  
    adminLogOut() {
      this.adminLoginService.adminLoggedOut();
      this.router.navigate(['/admin-login']);
      this.isAdminDropdownOpen = false;
    }

}
