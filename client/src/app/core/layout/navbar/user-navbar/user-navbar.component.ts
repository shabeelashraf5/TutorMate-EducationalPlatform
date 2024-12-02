import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../../service/users/login/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.css'
})
export class UserNavbarComponent implements OnInit {

  isLogged!: Observable<boolean>

  private loginService = inject(LoginService)
  private router = inject(Router)

  ngOnInit() {

    this.isLogged  = this.loginService.loggedIn$
    
    
  }


  logOut(){

    this.loginService.logOut()
    this.router.navigate(['/'])


  }



}
