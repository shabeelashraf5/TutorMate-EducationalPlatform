import { Component, computed, inject, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../../service/users/login/login.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-user-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.css',
})
export class UserNavbarComponent {
  @Input() menuItems: { name: string }[] = [];
  @Input() isFname: string | null = '';
  @Input() isLname: string | null = '';
  @Input() isEmail: string | null = '';
  @Input() toggleDropdown: Function = () => {};
  @Input() logOut: Function = () => {};
  @Input() isDropdownOpen: boolean = false;
  @Input() isLogged!: Observable<boolean>;

  // isDropdownOpen: boolean = false;

  // isLogged!: Observable<boolean>;
  // isEmail!: string | null;
  // isFname!: string | null;
  // isLname!: string | null;

  // menuItems = [
  //   { name: 'Home' },
  //   { name: 'About' },
  //   { name: 'Services' },
  //   { name: 'Contact' },
  // ];

  // //isLogged = computed(() => this.loginService.isLogged())

  // private loginService = inject(LoginService);
  // private router = inject(Router);

  // ngOnInit() {
  //   this.isLogged = this.loginService.loggedIn$;
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

  // logOut = () => {
  //   this.isDropdownOpen = false;
  //   this.loginService.logOut();
  //   this.router.navigate(['/']);
  // };
}
