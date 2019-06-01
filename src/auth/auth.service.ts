import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './lib/JwtPayload';

@Injectable()
export class AuthService {

    public constructor(private readonly jwtService: JwtService) {

    }

    public getToken(): any {

        const user: JwtPayload = { email: 'test@email.com' };
        const token = this.jwtService.sign(user);

        return {

            expiresIn: 86400 * 7,
            token,

        };

    }

}

