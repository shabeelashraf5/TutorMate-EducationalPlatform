import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterDto } from '../../dto/register.dto';
import { UsersService } from 'src/modules/users/providers/users/users.service';
import { LoginDto } from '../../dto/login.dto';
import { JwtAuthService } from '../jwt-auth/jwt-auth.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtAuthService: JwtAuthService,
  ) {}

  async register(registerDto: RegisterDto, file: Express.Multer.File) {
    try {
      const { email } = registerDto;

      const existingUser = await this.userService.findEmail(email);

      if (existingUser) {
        throw new HttpException('Email Already Used', HttpStatus.BAD_REQUEST);
      }

      const imagePath = file
        ? `/uploads/images/${file.filename}`
        : 'http://localhost:3000/uploads/images/image.jpg';

      const user = await this.userService.createUser({
        ...registerDto,
        image: imagePath,
      });

      return { success: true, message: 'User registered successfully', user };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
    }
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    try {
      const loginUser = await this.userService.findEmail(email);

      if (!loginUser) {
        throw new HttpException(
          'Invalid email, please register your email',
          HttpStatus.UNAUTHORIZED,
        );
      }

      if (loginUser.password !== password) {
        throw new HttpException('Invalid password', HttpStatus.BAD_REQUEST);
      }

      const accessToken = await this.jwtAuthService.generateAccessToken(
        loginUser.id,
        loginUser.email,
      );

      return {
        success: true,
        message: 'User logged In Successfully',
        token: accessToken,
        users: loginUser,
        role: loginUser.role,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
