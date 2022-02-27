import { Client, Collection, MessageEmbed } from "discord.js"

const CLIENT = new Client({ intents: 513 });
const PP = 'https://images-ext-1.discordapp.net/external/_muelNMDX6BABFmU9QBaf4RUefbRFyy-IEMp0BCZr7M/https/cdn.discordapp.com/avatars/412723052476891136/3fda9d70e3656d2eaf18e3c54890f58d.webp';

CLIENT.commands = new Collection();
CLIENT.slashCommands = [];
CLIENT.embed = function(message, type) { 
    return new MessageEmbed() 
    .setAuthor({ name: `Demandée par ${message.author.username}` })
    .setTitle(type === 'err' ? 'Erreur...' : 'Commande effectuée avec succès !')
    .setColor(type === 'err' ? 'RED' : 'LIGHT_GREY')
    .setThumbnail(message.author.displayAvatarURL())
    .setTimestamp()
    .setFooter({ text: "Developped by 『🌸』 嵐 Lucifer リーダー『🍁』#1293", iconURL: PP })
}
export default CLIENT
