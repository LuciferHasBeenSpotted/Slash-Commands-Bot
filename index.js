import CLIENT from './utils/client.js';
import { TOKEN } from './utils/config.js';
import eventLoader from "./utils/loaders/eventLoader.js";
import commandLoader from "./utils/loaders/commandLoader.js";
import slashCommandLoader from "./utils/loaders/slashCommandLoader.js";

eventLoader(CLIENT);
commandLoader(CLIENT);
slashCommandLoader(CLIENT)

CLIENT.login(TOKEN);
