import { Module }           from '@nestjs/common';
import { TypeOrmModule }    from '@nestjs/typeorm';
import { AppController }    from './app.controller';
import { AppService }       from './app.service';
import { AuthModule }       from './auth/auth.module';
import { ChannelsModule }   from './channels/channels.module';
import { MonitoringModule } from './monitoring/monitoring.module';

@Module({

    imports: [

        AuthModule,
        ChannelsModule,
        MonitoringModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.MYSQL_HOST,
            port: Number(process.env.MYSQL_PORT),
            username: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            entities: [ __dirname + '/_DB/*.js' ],
            synchronize: true,
        }),

    ],
    controllers: [ AppController ],
    providers: [ AppService ],

})
export class AppModule {

    public constructor() {

        // console.log(__dirname);

    }

}
