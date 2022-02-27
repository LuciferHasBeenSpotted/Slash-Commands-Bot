import handle from "./handle.js";

export default function(client) {
    handle('events', async path => {
        const eventName = path.split('/').pop().split('.')[0],
            eventCode = await import(path);
        client.on(eventName, eventCode.default);
        console.log(`Event ${eventName} chargé`)
    });
};
