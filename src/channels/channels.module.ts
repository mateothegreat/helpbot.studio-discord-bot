import { Module }             from '@nestjs/common';
import { ChannelsController } from './channels.controller';
import { ChannelsService }    from './channels.service';

@Module({

    imports: [],
    controllers: [ ChannelsController ],
    providers: [ ChannelsService ],
    exports: [ ChannelsService ]

})
export class ChannelsModule {
}
