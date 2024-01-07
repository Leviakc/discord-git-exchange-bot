import { Client, Events, GatewayIntentBits } from "npm:discord.js@14";
import { load } from "https://deno.land/std@0.211.0/dotenv/mod.ts";

const env = await load();

// create a new Client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// listen for the client to be ready
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

const DISCORD_TOKEN = env["DISCORD_TOKEN"];
console.log(DISCORD_TOKEN);
