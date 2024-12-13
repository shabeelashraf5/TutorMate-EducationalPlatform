import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserNavbarComponent } from '../../../core/layout/navbar/user-navbar/user-navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, UserNavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
