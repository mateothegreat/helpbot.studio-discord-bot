import { Controller, Get } from '@nestjs/common';
import { AuthService }     from './auth.service';

@Controller('/auth')
export class AuthController {

    public constructor(private readonly authService: AuthService) {

    }

    @Get('/login')
    public login(): string {

        return this.authService.getToken();

    }

}
