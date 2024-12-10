import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserNavbarComponent } from './core/layout/navbar/user-navbar/user-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'client';
}
