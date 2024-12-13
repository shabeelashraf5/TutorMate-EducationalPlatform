import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminloginService } from '../../core/service/admin/adminlogin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminlayout',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './adminlayout.component.html',
  styleUrl: './adminlayout.component.css',
})
export class AdminlayoutComponent implements OnInit {

  isAdminDropdownOpen: boolean = false
  isAdminLogged!: Observable<boolean>

  router = inject(Router)
  adminLoginService = inject(AdminloginService)



  ngOnInit() {

    this.isAdminLogged = this.adminLoginService.adminlogged$
  }

  toggleAdminDropdown = () => {
    this.isAdminDropdownOpen = !this.isAdminDropdownOpen;
    console.log('Dropdown toggled:', this.isAdminDropdownOpen);
  };


  adminLogOut(){

    this.adminLoginService.adminLoggedOut()
    this.router.navigate(['/admin'])
    this.isAdminDropdownOpen = false

  }
}
