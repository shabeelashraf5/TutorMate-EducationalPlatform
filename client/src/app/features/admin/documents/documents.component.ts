import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent {

  isModalOpen = false; // Tracks modal state
  
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

}
