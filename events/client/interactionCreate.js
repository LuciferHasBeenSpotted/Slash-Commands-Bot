export default function(interaction) {
    if(interaction.isCommand()) {
        const command = interaction.client.slashCommands.find(slashCommand => slashCommand.name == interaction.commandName);
        if(!command) return;
        command.run(interaction);
    }
}
