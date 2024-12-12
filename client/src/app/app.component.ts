import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserNavbarComponent } from './core/layout/navbar/user-navbar/user-navbar.component';
import { Observable } from 'rxjs';
import { LoginService } from './core/service/users/login/login.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { AdminloginService } from './core/service/admin/adminlogin.service';
import { AdminNavbarComponent } from './core/layout/navbar/admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserNavbarComponent,
    CommonModule,
    AdminNavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isDropdownOpen: boolean = false;

  isLogged!: Observable<boolean>;
  isEmail!: string | null;
  isFname!: string | null;
  isLname!: string | null;

  isAdminDropdownOpen: boolean = false;
  isAdminLogged!: Observable<boolean>;

  menuItems = [
    { name: 'Home' },
    { name: 'About' },
    { name: 'Services' },
    { name: 'Contact' },
  ];

  adminMenuItems = [
    { name: 'Home' },
    { name: 'About' },
    { name: 'Services' },
    { name: 'Contact' },
  ];

  private loginService = inject(LoginService);
  private adminLoginService = inject(AdminloginService);
  private router = inject(Router);

  ngOnInit() {
    this.isLogged = this.loginService.loggedIn$;
    this.getDetails();
  }

  getDetails() {
    this.loginService.users$.subscribe({
      next: (user) => {
        this.isEmail = user.email;
        this.isFname = user.fname;
        this.isLname = user.lname;
        console.log('Logged email', user);
      },
    });
  }

  toggleDropdown = () => {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log('Dropdown toggled:', this.isDropdownOpen);
  };

  toggleAdminDropdown = () => {
    this.isAdminDropdownOpen = !this.isAdminDropdownOpen;
    console.log('Dropdown toggled:', this.isAdminDropdownOpen);
  };

  logOut = () => {
    this.isDropdownOpen = false;
    this.loginService.logOut();
    this.router.navigate(['/']);
  };

  adminLogOut() {
    this.adminLoginService.adminLoggedOut();
    this.router.navigate(['/admin']);
    this.isAdminDropdownOpen = false;
  }
}
