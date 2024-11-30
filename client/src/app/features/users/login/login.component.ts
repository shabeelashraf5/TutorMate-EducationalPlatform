import { Component, OnInit } from '@angular/core';
import { UserNavbarComponent } from '../../../core/layout/navbar/user-navbar/user-navbar.component';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [UserNavbarComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup

  constructor(){}

  ngOnInit() {

    this.loginForm()
    
  }


  loginForm() {

    this.myForm = new FormGroup({

      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required])

    })

  }



}
