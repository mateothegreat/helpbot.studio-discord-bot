import { Controller, Get } from '@nestjs/common';
import { AppService }      from './app.service';
import { ChannelsService } from './channels/channels.service';

@Controller()
export class AppController {

    public constructor(private readonly appService: AppService,
                       private readonly channelsService: ChannelsService) {

    }

    @Get()
    public getHello(): string {

        // this.channelsService.sendMessage(34453545);

        return this.appService.getHello();

    }

}
