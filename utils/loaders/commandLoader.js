import handle from "./handle.js";

export default async function(client) {
    await handle('commands', async path => {
        const commandName = path.split('/').pop().split('.')[0],
            commandCode = await import(path);
        
        client.commands.set(commandName, commandCode.default);
        console.log(`La commande ${commandName} est chargée`);
    });
};
