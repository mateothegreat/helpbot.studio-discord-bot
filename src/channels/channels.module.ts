import { Module }          from '@nestjs/common';
import { ChannelsService } from './channels.service';

@Module({

    imports: [],
    controllers: [],
    providers: [ ChannelsService ],
    exports: [ ChannelsService ]

})
export class ChannelsModule {
}
