import { Client, Collection, MessageEmbed } from "discord.js"

const CLIENT = new Client({ intents: 513 });

CLIENT.commands = new Collection();
CLIENT.slashCommands = [];
CLIENT.embed = message => new MessageEmbed() 
    .setTitle("Commande effectuée avec succès")
    .setAuthor({text: "Developped by 『🌸』 嵐 Lucifer リーダー『🍁』#1293", iconURL: 'https://images-ext-1.discordapp.net/external/U-ACd5WTYVDITIkNSaord4nSHVWurCsGnc5rgGPoaTI/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/412723052476891136/3fda9d70e3656d2eaf18e3c54890f58d.webp?width=647&height=647'})
    .setURL('www.github.com/luciferHasBeenSpotted')
    .setColor('DARK_PURPLE')
    .setThumbnail(message.author.displayAvatarURL())
    .setTimestamp()

export default CLIENT
