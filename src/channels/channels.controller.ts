import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard }                        from '@nestjs/passport';
import { ChannelsService }                  from './channels.service';
import { Message }                          from './message';

@Controller('/channels')
export class ChannelsController {

    public constructor(private channelsService: ChannelsService) {

    }

    @Get('/send')
    @UseGuards(AuthGuard('jwt'))
    public sendMessage(@Body() message: Message): string {


        this.channelsService.sendMessage(message);

        return 'aiutjed';

    }

}
