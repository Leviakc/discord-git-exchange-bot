import {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} from "npm:discord.js@14";

export const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replies with pong");

export const execute = async (interaction: ChatInputCommandInteraction) => {
  await interaction.reply("Pong!");
};
