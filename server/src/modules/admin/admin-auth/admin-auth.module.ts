import { forwardRef, Module } from '@nestjs/common';
import { AdminAuthController } from './admin-auth.controller';
import { AdminAuthService } from './providers/admin-auth/admin-auth.service';
import { AdminUserModule } from '../admin-user/admin-user.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtAuthService } from 'src/modules/auth/providers/jwt-auth/jwt-auth.service';
import jwtConfig from 'src/config/jwt.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [AdminAuthController],
  providers: [AdminAuthService, JwtService, JwtAuthService],
  exports: [AdminAuthService],
  imports: [
    forwardRef(() => AdminUserModule),
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
  ],
})
export class AdminAuthModule {}
