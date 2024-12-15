import { Component, inject, Input, OnInit } from '@angular/core';
import { AdminloginService } from '../../../service/admin/adminlogin.service';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { AdminlayoutComponent } from '../../../../features/admin/adminlayout.component';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css',
})
export class AdminNavbarComponent implements OnInit {
  //@Input() adminMenuItems: { name: string }[] = [];
  // @Input() isFname: string | null = '';
  // @Input() isLname: string | null = '';
  // @Input() isEmail: string | null = '';
  // @Input() toggleAdminDropdown: Function = () => {};
  // @Input() adminLogOut: Function = () => {};
  // @Input() isAdminDropdownOpen: boolean = false;
  // @Input() isAdminLogged!: Observable<boolean>;

  isAdminDropdownOpen: boolean = false;
  isAdminLogged!: Observable<boolean>;

  router = inject(Router);
  adminLoginService = inject(AdminloginService);

  adminMenuItems = [
    { name: 'Home' },
    { name: 'About' },
    { name: 'Services' },
    { name: 'Contact' },
  ];

  ngOnInit() {
    this.isAdminLogged = this.adminLoginService.adminlogged$;
  }

  // getAdminDetails(){

  //   this.adminLoginService.adminlogged$.subscribe({
  //     next: (response) => {

  //     }
  //   })

  // }

  toggleAdminDropdown = () => {
    this.isAdminDropdownOpen = !this.isAdminDropdownOpen;
    console.log('Dropdown toggled:', this.isAdminDropdownOpen);
  };

  adminLogOut() {
    this.adminLoginService.adminLoggedOut();
    this.router.navigate(['/admin']);
    this.isAdminDropdownOpen = false;
  }
}
