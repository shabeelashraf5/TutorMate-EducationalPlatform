import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserNavbarComponent } from './core/layout/navbar/user-navbar/user-navbar.component';
import { combineLatest, map, Observable } from 'rxjs';
import { LoginService } from './core/service/users/login/login.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { AdminloginService } from './core/service/admin/adminlogin.service';
import { AdminNavbarComponent } from './core/layout/navbar/admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // isDropdownOpen: boolean = false;
  // isLogged!: Observable<boolean>;
  // isAdminLoggedIn!: Observable<boolean>
  // userRole$!: Observable<'user' | 'admin' | null>;
  // isEmail!: string | null;
  // isFname!: string | null;
  // isLname!: string | null;
  // c
  // isAdminLogged!: Observable<boolean>;
  // menuItems = [
  //   { name: 'Home' },
  //   { name: 'About' },
  //   { name: 'Services' },
  //   { name: 'Contact' },
  // ];
  // adminMenuItems = [
  //   { name: 'Home' },
  //   { name: 'About' },
  //   { name: 'Services' },
  //   { name: 'Contact' },
  // ];
  // private loginService = inject(LoginService);
  // private adminLoginService = inject(AdminloginService);
  // private router = inject(Router);
  // ngOnInit() {
  //   this.isLogged = this.loginService.loggedIn$;
  //   this.isAdminLogged = this.adminLoginService.adminlogged$
  //   // this.userRole$ = combineLatest([this.loginService.loggedIn$, this.adminLoginService.adminlogged$]).pipe(
  //   //   map(([isUserLoggedIn, isAdminLoggedIn]) => {
  //   //     if (isAdminLoggedIn) return 'admin';
  //   //     if (isUserLoggedIn) return 'user';
  //   //     return null;
  //   //   })
  //   // );
  //   this.getDetails();
  // }
  // getDetails() {
  //   this.loginService.users$.subscribe({
  //     next: (user) => {
  //       this.isEmail = user.email;
  //       this.isFname = user.fname;
  //       this.isLname = user.lname;
  //       console.log('Logged email', user);
  //     },
  //   });
  // }
  // toggleDropdown = () => {
  //   this.isDropdownOpen = !this.isDropdownOpen;
  //   console.log('Dropdown toggled:', this.isDropdownOpen);
  // };
  // toggleAdminDropdown = () => {
  //   this.isAdminDropdownOpen = !this.isAdminDropdownOpen;
  //   console.log('Dropdown toggled:', this.isAdminDropdownOpen);
  // };
  // logOut = () => {
  //   this.isDropdownOpen = false;
  //   this.loginService.logOut();
  //   this.router.navigate(['/']);
  // };
  // adminLogOut() {
  //   this.adminLoginService.adminLoggedOut();
  //   this.router.navigate(['/admin']);
  //   this.isAdminDropdownOpen = false;
  // }
}
