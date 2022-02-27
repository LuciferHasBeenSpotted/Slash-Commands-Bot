import { Client } from "discord.js";

import { TOKEN } from './utils/config.js';
import eventLoader from './utils/loaders/eventLoader';

const CLIENT = new Client({ intents: 1 });

eventLoader(CLIENT);

CLIENT.login(TOKEN);
