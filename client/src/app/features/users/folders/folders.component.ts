import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { UserNavbarComponent } from '../../../core/layout/navbar/user-navbar/user-navbar.component';
import { RouterLink } from '@angular/router';
import { AdfolderService } from '../../../core/service/admin/adFolder/adfolder.service';
import { Folder } from '../../../models/adminFolder.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-folders',
  standalone: true,
  imports: [UserNavbarComponent, RouterLink, CommonModule],
  templateUrl: './folders.component.html',
  styleUrl: './folders.component.css',
})
export class FoldersComponent implements OnInit, CommonModule {
  folderDetails: Folder[] = [];

  constructor(private folderService: AdfolderService) {}

  ngOnInit() {
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
}
