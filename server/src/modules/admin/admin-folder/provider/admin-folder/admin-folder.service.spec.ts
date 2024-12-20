import { Test, TestingModule } from '@nestjs/testing';
import { AdminFolderService } from './admin-folder.service';

describe('AdminFolderService', () => {
  let service: AdminFolderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminFolderService],
    }).compile();

    service = module.get<AdminFolderService>(AdminFolderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
