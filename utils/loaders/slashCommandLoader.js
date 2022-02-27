import handle from "./handle.js";

export default async function(client) {
    await handle('slashCommands', async path => {
        const slashCommandName = path.split('/').pop().split('.')[0],
            slashCommandCode = await import(path);
        
        const slashCommand = {name: slashCommandName};
        for(const k in slashCommandCode.default) slashCommand[k] = slashCommandCode.default[k]
        
        client.slashCommands.push(slashCommand);
        console.log(`La slash commande ${slashCommandName} est chargée`);
    })
};
