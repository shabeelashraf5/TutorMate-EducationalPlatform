import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AdusersService } from '../../../core/service/admin/adusers/adusers.service';
import { Register } from '../../../models/register.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-usersad',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './usersad.component.html',
  styleUrl: './usersad.component.css',
})
export class UsersadComponent implements OnInit {
  showDialog: boolean = false;
  dialogTitle: string = '';
  dialogMessage: string = '';
  actionType: string = '';
  userDetails: Register[] = [];
  isModalOpen: boolean = false
  formData!: FormGroup
  selectedFiles: File[] = [];
  isVisible: boolean = false;
  showEditDialoge: boolean = false

  useradService = inject(AdusersService);

  classes = [
    { value: '1', label: 'Class I' },
    { value: '2', label: 'Class II' },
    { value: '3', label: 'Class III' },
    { value: '4', label: 'Class IV' },
    { value: '5', label: 'Class V' },
    { value: '6', label: 'Class VI' },
    { value: '7', label: 'Class VII' },
    { value: '8', label: 'Class VIII' },
    { value: '9', label: 'Class IX' },
    { value: '10', label: 'Class X' },
    { value: '11', label: 'Class XI' },
    { value: '12', label: 'Class XII' },
  ];


  ngOnInit() {
    this.loadUsers();
  }

   myForm() {
      this.formData = new FormGroup({
        title: new FormControl('', [Validators.required]),
        class: new FormControl('', [Validators.required]),
      });
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

  toggleModal() {
    this.showEditDialoge = !this.showEditDialoge;
  }

  closeDialogEdit() {
    this.showEditDialoge = false;
  }

  createFolder() {

  }

  onFileChange(event: Event): void {

  }

}
