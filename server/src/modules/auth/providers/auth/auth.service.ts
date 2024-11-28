import { Injectable } from '@nestjs/common';
import { RegisterDto } from '../../dto/register.dto';
import { UsersService } from 'src/modules/users/providers/users/users.service';


@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService ){}


    async register(registerDto: RegisterDto){

        const {fname, lname, email, password} = registerDto

        const user = await this.userService.createUser(registerDto)

        return { message: 'User registered successfully', user };


    }



}
