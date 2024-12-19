import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { UserNavbarComponent } from '../../../core/layout/navbar/user-navbar/user-navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-folders',
  standalone: true,
  imports: [UserNavbarComponent, RouterLink],
  templateUrl: './folders.component.html',
  styleUrl: './folders.component.css'
})
export class FoldersComponent {

}
