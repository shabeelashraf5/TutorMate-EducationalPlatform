import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { RegisterDto } from '../../dto/register.dto';
import { UsersService } from 'src/modules/users/providers/users/users.service';
import { LoginDto } from '../../dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import jwtConfig from 'src/config/jwt.config';
import { JwtAuthService } from '../jwt-auth/jwt-auth.service';


@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService, private readonly jwtAuthService: JwtAuthService){}


    async register(registerDto: RegisterDto){

        const {fname, lname, email, password, repeat_password, location, phone} = registerDto

        try {

        const user = await this.userService.createUser(registerDto)

        return { message: 'User registered successfully', user };

        } catch (error){

            if(error instanceof HttpException){

                throw error
            }
        }


    }



    async login(loginDto: LoginDto){

        const {email, password} = loginDto

        try {

        const loginUser = await this.userService.findEmail(email)

        if(!loginUser){

            throw new HttpException('Invalid email or password', HttpStatus.UNAUTHORIZED)
        }

        if(loginUser.password !== password){

            throw new HttpException('Invalid password', HttpStatus.BAD_REQUEST)

        }

       const accessToken = await this.jwtAuthService.generateAccessToken(loginUser.id, loginUser.email)
       

        return { message: 'User logged In Successfully', accessToken}

        } catch (error){

            if( error instanceof HttpException){

                throw error
            }

            throw new HttpException( 'Internal server error', HttpStatus.INTERNAL_SERVER_ERROR );
        }

    }

}
