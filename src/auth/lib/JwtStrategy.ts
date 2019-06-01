import { Injectable }           from '@nestjs/common';
import { PassportStrategy }     from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService }          from '../auth.service';
import { JwtPayload }           from './JwtPayload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    public constructor(private readonly authService: AuthService) {

        super({

            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secretKey',

        });

    }

    public async validate(payload: JwtPayload) {

        // const user = await this.authService.validateUser(payload);
        //
        // if (!user) {
        //
        //     throw new UnauthorizedException();
        //
        // }

        return { username: 'test' };

    }

}
