import { Module }         from '@nestjs/common';
import { JwtModule }      from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService }    from './auth.service';
import { JwtStrategy }    from './lib/JwtStrategy';

@Module({

    imports: [

        PassportModule.register({ defaultStrategy: 'jwt' }),

        JwtModule.register({

            secretOrPrivateKey: 'secretKey',
            signOptions: {

                expiresIn: 86400 * 7,

            }

        })

    ],
    controllers: [

        AuthController
    ],
    providers: [

        AuthService,
        JwtStrategy

    ],
    exports: [

        PassportModule,
        AuthService

    ]

})

export class AuthModule {
}
