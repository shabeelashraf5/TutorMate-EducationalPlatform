import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../../core/service/register/register.service';
import { Router } from '@angular/router';
import { Register } from '../../../models/register.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  myForms!: FormGroup

  private userService = inject(RegisterService)
  private router = inject(Router)

  ngOnInit() {

    this.setForm()

  }


  setForm(){

    this.myForms = new FormGroup({

      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      repeat_password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      phone: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required])

    })
  }


  submitForm(){

    if(this.myForms.invalid){

      this.myForms.markAsUntouched()

    }else {


    const formValue: Register = this.myForms.value

    this.userService.registerUser(formValue).subscribe({
      next: (response) => {
        console.log('User registered successfully' , response)
        this.router.navigate(['/'])
      },
       error: (error) => {

        console.log('Error Occured', error)

       } 
    })

  }

}


}
