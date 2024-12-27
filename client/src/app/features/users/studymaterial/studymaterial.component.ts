import { Component, inject, OnInit } from '@angular/core';
import { UserNavbarComponent } from '../../../core/layout/navbar/user-navbar/user-navbar.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserfilesService } from '../../../core/service/users/userFiles/userfiles.service';
import { Folder } from '../../../models/adminFolder.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studymaterial',
  standalone: true,
  imports: [UserNavbarComponent, CommonModule],
  templateUrl: './studymaterial.component.html',
  styleUrl: './studymaterial.component.css',
})
export class StudymaterialComponent implements OnInit {

  filesId!: string
  filesData: Folder[] = []

  private filesService = inject(UserfilesService)
  private route = inject(ActivatedRoute)

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      this.filesId = params.get('folderId')!
      this.loadFiles()

    })
    
    
  }

  loadFiles() {
    this.filesService.displayUserFiles(this.filesId).subscribe({
      next: (response) => {
        this.filesData = response.file.files  || [];;
        console.log('Response File:', this.filesData);
        console.log('Response:', response);
      },
      error: (err) => console.error('Error loading files', err),
    });
  }


 



}
