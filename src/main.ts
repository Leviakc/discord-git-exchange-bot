// import * as path from "https://deno.land/std@0.207.0/path/mod.ts";
import { Client, Collection, Events, GatewayIntentBits } from "npm:discord.js";

// import { assertEquals } from "./assert/mod.ts";
import config from "./config.ts";
import { BaseInteraction } from "discord";
// import { InteractionResponseType } from "../../../../../../.cache/deno/npm/registry.npmjs.org/discord-api-types/0.37.61/payloads/v10/_interactions/responses.d.ts";

declare module "npm:discord.js" {
  interface Client {
    commands: Collection<string, unknown>;
  }
}

// create a new Client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
client.commands = new Collection();

// const __dirname = new URL("", import.meta.url).pathname;

// const foldersPath = path.join(__dirname, "../commands/utility");

// const commandFolders = Deno.readDirSync(foldersPath);
// console.log(commandFolders);

// for (const dirEntry of commandFolders) {
//   console.log(dirEntry.name);
// }

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.MessageCreate, (message) => {
  const user = message.author.username;
  const image = message.attachments.size;
  //557054006845898753
  //227147940513185792
  if (message.author.id === "227147940513185792" && image > 0) {
    message.delete();
  }
  console.log(message.author.id);
  console.log(user);
  console.log(image);
});

client.on(Events.InteractionCreate, (interaction) => {
  console.log(interaction.client.user);

  console.log(interaction.user.displayName);
  console.log(interaction.user.globalName);
  // console.log(interaction.isM);
});

// Log in to Discord with your client's token
client.login(config.DISCORD_TOKEN);
