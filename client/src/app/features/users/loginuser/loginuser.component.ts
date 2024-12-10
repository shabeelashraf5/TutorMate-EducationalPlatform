import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../../core/service/users/login/login.service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../../shared/components/login/login.component';

@Component({
  selector: 'app-loginuser',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, LoginComponent],
  templateUrl: './loginuser.component.html',
  styleUrl: './loginuser.component.css',
})
export class LoginuserComponent {}
