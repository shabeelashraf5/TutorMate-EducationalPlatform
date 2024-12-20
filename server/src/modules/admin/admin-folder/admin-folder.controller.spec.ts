import { Test, TestingModule } from '@nestjs/testing';
import { AdminFolderController } from './admin-folder.controller';

describe('AdminFolderController', () => {
  let controller: AdminFolderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminFolderController],
    }).compile();

    controller = module.get<AdminFolderController>(AdminFolderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
