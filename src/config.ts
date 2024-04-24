import { load } from "https://deno.land/std@0.211.0/dotenv/mod.ts";

const env = await load();

const DISCORD_TOKEN = env["DISCORD_TOKEN"];
const DISCORD_CLIENT_ID = env["DISCORD_CLIENT_ID"];
const DISCORD_GUILD_ID = env["DISCORD_GUILD_ID"];

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID || !DISCORD_GUILD_ID) {
  throw new Error("Missing enviroment variables");
}

const config = {
  DISCORD_TOKEN,
  DISCORD_CLIENT_ID,
  DISCORD_GUILD_ID,
};

export default config;
