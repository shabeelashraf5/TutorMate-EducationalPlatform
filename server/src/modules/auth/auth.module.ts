import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './providers/auth/auth.service';
import { UsersModule } from '../users/users.module';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from 'src/config/jwt.config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtAuthService } from './providers/jwt-auth/jwt-auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtService, JwtAuthService],
  exports: [AuthService],
  imports: [
    forwardRef(() => UsersModule),
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
  ],
})
export class AuthModule {}
