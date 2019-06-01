import { BOT }        from '@autobot/common';
import { Injectable } from '@nestjs/common';
import { RichEmbed }  from 'discord.js';
import { Message }    from './message';

@Injectable()
export class ChannelsService {

    public sendMessage(message: Message): Promise<Message> {

        const embed: RichEmbed = new RichEmbed().setTitle(message.title)
                                                .setDescription(message.description);

        if (message.fields) {

            message.fields.forEach(field => {

                embed.addField(field.key, field.value);

            });

        }

        return BOT.client.guilds.find(guild => guild.id == message.guild)
                  .channels.find(channel => channel.id == message.channel)
                  .send(embed);

    }

}
