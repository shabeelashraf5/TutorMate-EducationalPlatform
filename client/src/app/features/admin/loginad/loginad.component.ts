import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../../shared/components/login/login.component';

@Component({
  selector: 'app-loginad',
  standalone: true,
  imports: [RouterModule, LoginComponent],
  templateUrl: './loginad.component.html',
  styleUrl: './loginad.component.css',
})
export class LoginadComponent {}
