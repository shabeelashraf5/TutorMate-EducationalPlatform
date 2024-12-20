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
  selectedFile: File | null = null;

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
    { value: '12', label: 'Class XII' },
  ];

  ngOnInit() {
    this.setForm();
  }

  // onFileChange(event: Event): void {
  //   const file = (event.target as HTMLInputElement).files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.previewImage = reader.result;
  //     };
  //     reader.readAsDataURL(file);
  //     this.myForms.patchValue({ image: file });
  //   }
  // }

  onFileChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result;
      };
      reader.readAsDataURL(file);

      // No need to patch value for file input, just store it separately
      this.selectedFile = file;
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
        class: new FormControl('', [Validators.required]),
        image: new FormControl(''),
      },
      { validators: passwordMatchValidator }
    );
  }

  //   submitForm() {
  //     if (this.myForms.invalid) {
  //       this.myForms.markAllAsTouched();
  //     } else {
  //       const formValue: Register = this.myForms.value;

  //       console.log('Submitting form with values:', formValue);
  //       this.userService.registerUser(formValue).subscribe({
  //         next: (response) => {
  //           console.log('User registered successfully', response);
  //           this.router.navigate(['/']);
  //         },
  //         error: (error) => {
  //           if (error.status === 400) {
  //             this.existEmail = 'Email alreadt exit. Please try different Email';
  //           }
  //           console.error('Error Occured', error);
  //         },
  //       });
  //     }
  //   }

  submitForm() {
    // Check if the form is invalid
    if (this.myForms.invalid) {
      this.myForms.markAllAsTouched(); // Mark all fields as touched to trigger validation messages
      return;
    }

    // Create a FormData object to send the data with the file
    const formData = new FormData();

    // Append all form fields to the FormData object
    formData.append('fname', this.myForms.get('fname')?.value);
    formData.append('lname', this.myForms.get('lname')?.value);
    formData.append('email', this.myForms.get('email')?.value);
    formData.append('password', this.myForms.get('password')?.value);
    formData.append(
      'repeat_password',
      this.myForms.get('repeat_password')?.value
    );
    formData.append('phone', this.myForms.get('phone')?.value);
    formData.append('location', this.myForms.get('location')?.value);
    formData.append('class', this.myForms.get('class')?.value);

    // Append the selected file if any
    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }

    // Submit the FormData object
    this.userService.registerUser(formData).subscribe({
      next: (response) => {
        console.log('User registered successfully', response);
        this.router.navigate(['/']); // Navigate after successful registration
      },
      error: (error) => {
        // Handle error (e.g., if the email already exists)
        if (error.status === 400) {
          this.existEmail =
            'Email already exists. Please try a different email.';
        }
        console.error('Error occurred', error);
      },
    });
  }
}
