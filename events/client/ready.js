export default function(client) {
    console.log('Je suis log bg');

    const devGuild = client.guilds.cache.get('854716033231224842');
    devGuild.commands.set(client.slashCommands);
}
