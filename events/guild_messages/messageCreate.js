import { PREFIX } from "../../utils/config.js";

export default async function(message) {
    if(!message.content.endsWith(PREFIX)) return;
    const args = message.content.split(PREFIX)[0].trim().split(' ');
    const commandName = args.shift().toLowerCase();
    const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases.includes(commandName));

    if(!command) return;
    command.run(message, args);
};
