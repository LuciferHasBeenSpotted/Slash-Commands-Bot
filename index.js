import { Client, Collection } from "discord.js";

import { TOKEN } from './config.js';

const CLIENT = new Client({ intents: 1 });

["commands", 'cooldown'].forEach(x => CLIENT[x] = new Collection);



CLIENT.login(TOKEN)
