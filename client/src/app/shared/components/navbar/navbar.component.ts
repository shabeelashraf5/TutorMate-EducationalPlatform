import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() menuItems: { name: string }[] = [];
  @Input() isFname: string | null = '';
  @Input() isLname: string | null = '';
  @Input() isEmail: string | null = '';
  @Input() toggleDropdown: Function = () => {};
  @Input() logOut: Function = () => {};
  @Input() isDropdownOpen: boolean = false;
  @Input() isLogged!: Observable<boolean>;
}
