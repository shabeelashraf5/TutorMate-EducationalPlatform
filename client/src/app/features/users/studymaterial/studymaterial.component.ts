import { Component } from '@angular/core';
import { UserNavbarComponent } from '../../../core/layout/navbar/user-navbar/user-navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-studymaterial',
  standalone: true,
  imports: [UserNavbarComponent],
  templateUrl: './studymaterial.component.html',
  styleUrl: './studymaterial.component.css',
})
export class StudymaterialComponent {}
