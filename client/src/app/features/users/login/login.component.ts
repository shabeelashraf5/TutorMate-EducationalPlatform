import { Component, inject, Inject, OnInit } from '@angular/core';
import { UserNavbarComponent } from '../../../core/layout/navbar/user-navbar/user-navbar.component';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../../core/service/users/login/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup

  private loginService = inject(LoginService)
  private router = inject(Router)

  ngOnInit() {

    this.loginForm()
    
  }


  loginForm() {

    this.myForm = new FormGroup({

      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required])

    })

  }

  loginIn(){

    if(this.myForm.invalid){

      this.myForm.markAllAsTouched()

    }else {

      const userDetails = this.myForm.value

      this.loginService.login(userDetails.email, userDetails.password).subscribe({
        next: (response) => {
          console.log('LoggedIn:', response)

          if(response.success){
            this.router.navigate(['/home'])
          }
        }
      })


    }
  }



}
