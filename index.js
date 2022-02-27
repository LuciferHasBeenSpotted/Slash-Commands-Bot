import { Client } from "discord.js";

import { TOKEN } from './utils/config.js';
import eventLoader from './utils/loaders/eventLoader.js';
import commandLoader from './utils/loaders/commandLoader.js'

const CLIENT = new Client({ intents: 1 });

eventLoader(CLIENT);
commandLoader(CLIENT);

CLIENT.login(TOKEN);
