import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AdusersService } from '../../../core/service/admin/adusers/adusers.service';
import { Register } from '../../../models/register.model';

@Component({
  selector: 'app-usersad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usersad.component.html',
  styleUrl: './usersad.component.css',
})
export class UsersadComponent implements OnInit {
  showDialog: boolean = false;
  dialogTitle: string = '';
  dialogMessage: string = '';
  actionType: string = '';
  userDetails: Register[] = [];

  useradService = inject(AdusersService);

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.useradService.displayUserDetails().subscribe({
      next: (response) => {
        this.userDetails = response.users;
        console.log('Load Users Response', this.userDetails);
      },
    });
  }

  getImageUrl(imagePath: string): string {
    const defaultImageUrl = 'http://localhost:3000/uploads/images/image.jpg';
    if (!imagePath) {
      return defaultImageUrl;
    }

    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }

    return `http://localhost:3000${imagePath}`;
  }

  openDialog(action: string) {
    this.actionType = action;
    this.dialogTitle = `${action.charAt(0).toUpperCase() + action.slice(1)} Confirmation`;
    this.dialogMessage = `Are you sure you want to ${action} this user?`;
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }

  confirmAction() {
    console.log(`User has confirmed to ${this.actionType} the user`);
    this.closeDialog();
  }
}
