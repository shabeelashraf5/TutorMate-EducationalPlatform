import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './providers/auth/auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}


@Post('register')
public registerUser(@Body() registerUser: RegisterDto){

    return this.authService.register(registerUser)


}

}
