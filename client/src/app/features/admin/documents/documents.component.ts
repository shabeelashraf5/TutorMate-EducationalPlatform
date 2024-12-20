import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AdfolderService } from '../../../core/service/admin/adFolder/adfolder.service';
import { Folder } from '../../../models/adminFolder.model';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css',
})
export class DocumentsComponent implements OnInit {
  isModalOpen = false;
  folderDetails: Folder[] = [];
  formData!: FormGroup;

  folderService = inject(AdfolderService);
  router = inject(Router);

  ngOnInit() {
    this.myForm();
    this.loadFolder();
  }

  loadFolder() {
    this.folderService.displayFolder().subscribe({
      next: (response) => {
        this.folderDetails = response.folder;
        console.log(this.folderDetails);
      },
    });
  }

  myForm() {
    this.formData = new FormGroup({
      title: new FormControl('', [Validators.required]),
      class: new FormControl('', [Validators.required]),
    });
  }

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

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  createFolder() {
    if (this.formData.invalid) {
      console.log('Form is invalid');
      return;
    }

    const folderData: Folder = this.formData.value;

    this.folderService.createFolder(folderData).subscribe({
      next: (response) => {
        this.router.navigate(['/admin/documents']);
        this.loadFolder();
        this.isModalOpen = false;
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
