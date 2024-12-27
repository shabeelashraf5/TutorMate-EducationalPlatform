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
  previewImages: string[] = [];
  selectedFiles: File[] = [];

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

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
  
    if (input.files && input.files.length > 0) {
      // Convert input.files to an array
      const newFiles = Array.from(input.files);
  
      // Add new files to selectedFiles without duplicates
      newFiles.forEach((file) => {
        if (!this.selectedFiles.some((selectedFile) => selectedFile.name === file.name)) {
          this.selectedFiles.push(file);
  
          const reader = new FileReader();
          reader.onload = (e: ProgressEvent<FileReader>) => {
            if (e.target?.result) {
              this.previewImages.push(e.target.result as string);
            }
          };
          reader.readAsDataURL(file);
        }
      });
    }
  }
  

  myForm() {
    this.formData = new FormGroup({
      title: new FormControl('', [Validators.required]),
      class: new FormControl('', [Validators.required]),
      files: new FormControl('')
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
      console.log('Invalid form data:', this.formData.value);
      return;
    }

    const folderData = new FormData();
folderData.append('title', this.formData.get('title')?.value || '');
folderData.append('class', this.formData.get('class')?.value || '');

this.selectedFiles.forEach((file) => {
  folderData.append(`files`, file, file.name);
});

this.selectedFiles.forEach((file) => console.log('File:', file));
console.log('Form Data:', folderData);

    this.folderService.createFolder(folderData).subscribe({
      next: (response) => {
        this.router.navigate(['/admin/documents']);
        this.loadFolder();
        this.isModalOpen = false;
        console.log(response);
      }, 
      error: (error) => {
        console.error('Error Response:', error.error || error.message);
      },
    });
  }
}
