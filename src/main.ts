import * as path from 'https://deno.land/std@0.207.0/path/mod.ts';
import { Client, Collection, Events, GatewayIntentBits } from 'discord';

// import { assertEquals } from "./assert/mod.ts";
import config from './config.ts';

declare module 'npm:discord.js@14' {
  interface Client {
    commands: Collection<string, unknown>;
  }
}

// create a new Client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

const __dirname = new URL('', import.meta.url).pathname;

const foldersPath = path.join(__dirname, '../commands/utility');

const commandFolders = Deno.readDirSync(foldersPath);
console.log(commandFolders);

for (const dirEntry of commandFolders) {
  console.log(dirEntry.name);
}

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(config.DISCORD_TOKEN);
