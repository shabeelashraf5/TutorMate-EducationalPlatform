import { forwardRef, Module } from '@nestjs/common';
import { AdminAuthController } from './admin-auth.controller';
import { AdminAuthService } from './providers/admin-auth/admin-auth.service';
import { AdminUserModule } from '../admin-user/admin-user.module';

@Module({
  controllers: [AdminAuthController],
  providers: [AdminAuthService],
  exports: [AdminAuthService],
  imports: [forwardRef(() => AdminUserModule)],
})
export class AdminAuthModule {}
