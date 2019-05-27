import { BOT }        from '@autobot/common';
import { Injectable } from '@nestjs/common';
import { Message }    from 'discord.js';

@Injectable()
export class ChannelsService {

    public sendMessage(message: any): Promise<Message> {

        console.log(123123);

        return BOT.client.guilds.find(guild => guild.id == 581968863663751178).channels.find(channel => channel.id == 581971117565018162).send(message);

    }

}
