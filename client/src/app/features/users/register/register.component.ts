import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../../../models/register.model';
import { CommonModule } from '@angular/common';
import { RegisterService } from '../../../core/service/users/register/register.service';
import { passwordMatchValidator } from '../../../core/validators/password-match.validator';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, NavbarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  myForms!: FormGroup;
  existEmail: string = '';
  previewImage: string | ArrayBuffer | null = null;

  private userService = inject(RegisterService);
  private router = inject(Router);

  classes = [
    { value: '1', label: 'Class I' },
    { value: '2', label: 'Class II' },
    { value: '3', label: 'Class III' },
    { value: '4', label: 'Class IV' },
    { value: '5', label: 'Class V' },
    { value: '6', label: 'Class VI' },
    { value: '7', label: 'Class VII' },
    { value: '8', label: 'Class VIII' },
    { value: '9', label: 'Class IX' },
    { value: '10', label: 'Class X' },
    { value: '11', label: 'Class XI' },
    { value: '12', label: 'Class XII' }
  ];

  ngOnInit() {
    this.setForm();
  }

  onFileChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result;
      };
      reader.readAsDataURL(file);
      this.myForms.patchValue({ image: file });
    }
  }

  setForm() {
    this.myForms = new FormGroup(
      {
        fname: new FormControl('', [Validators.required]),
        lname: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        repeat_password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        phone: new FormControl('', [Validators.required]),
        location: new FormControl('', [Validators.required]),
        class: new FormControl('', [Validators.required])
      },
      { validators: passwordMatchValidator }
    );
  }

  submitForm() {
    if (this.myForms.invalid) {
      this.myForms.markAllAsTouched();
    } else {
      const formValue: Register = this.myForms.value;

      console.log('Submitting form with values:', formValue);
      this.userService.registerUser(formValue).subscribe({
        next: (response) => {
          console.log('User registered successfully', response);
          this.router.navigate(['/']);
        },
        error: (error) => {
          if (error.status === 400) {
            this.existEmail = 'Email alreadt exit. Please try different Email';
          }
          console.error('Error Occured', error);
        },
      });
    }
  }
}
