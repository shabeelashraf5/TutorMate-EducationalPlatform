import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { UserNavbarComponent } from '../../../core/layout/navbar/user-navbar/user-navbar.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AdfolderService } from '../../../core/service/admin/adFolder/adfolder.service';
import { Folder } from '../../../models/adminFolder.model';
import { CommonModule } from '@angular/common';
import { UserfolderService } from '../../../core/service/users/userFolder/userfolder.service';
import { LoginService } from '../../../core/service/users/login/login.service';

@Component({
  selector: 'app-folders',
  standalone: true,
  imports: [UserNavbarComponent, RouterLink, CommonModule],
  templateUrl: './folders.component.html',
  styleUrl: './folders.component.css',
})
export class FoldersComponent implements OnInit {
  folderDetails: Folder[] = [];
  userId!: string
  folderId!: string;

  constructor(private folderService: UserfolderService, private loginService: LoginService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id')!;
      this.loadFolder();
    });
  }


  loadFolder() {
   
    this.folderService.displayUserFolder(this.userId).subscribe({
      next: (response) => {
        console.log('API Response:', response);
        if (response && response.folder && Array.isArray(response.folder.folder)) {
          this.folderDetails = response.folder.folder;  
          console.log('Folder Details:', this.folderDetails);
        } else {
          console.error('Error: folder array is missing or not in the expected format');
        }
      },
      error: (err) => {
        console.error('Error fetching folders:', err);
      }
    });
  }

}
