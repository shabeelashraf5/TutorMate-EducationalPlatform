import { Component, computed, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../../service/users/login/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.css'
})
export class UserNavbarComponent implements OnInit {

  isDropdownOpen: boolean = false

  isLogged!: Observable<boolean>
  isEmail!: string | null;
  isFname!: string | null;
  isLname!: string | null

  //isLogged = computed(() => this.loginService.isLogged())

  private loginService = inject(LoginService)
  private router = inject(Router)

  ngOnInit() {

   this.isLogged  = this.loginService.loggedIn$ 
   this.getDetails()

  }

  getDetails(){

   

    this.loginService.users$.subscribe({
      next: (user) => {
        this.isEmail = user.email
        this.isFname = user.fname
        this.isLname = user.lname
        console.log('Logged email', user)
      }
    })
  }


  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen
    console.log('Dropdown toggled:', this.isDropdownOpen);
  }


  logOut(){
    
    this.isDropdownOpen = false; 
    this.loginService.logOut()
    this.router.navigate(['/'])


  }



}
