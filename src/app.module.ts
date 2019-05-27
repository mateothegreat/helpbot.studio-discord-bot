import { Module }           from '@nestjs/common';
import { AppController }    from './app.controller';
import { AppService }       from './app.service';
import { ChannelsModule }   from './channels/channels.module';
import { MonitoringModule } from './monitoring/monitoring.module';

@Module({

    imports: [

        ChannelsModule,
        MonitoringModule
        
    ],
    controllers: [ AppController ],
    providers: [ AppService ],

})
export class AppModule {
}
