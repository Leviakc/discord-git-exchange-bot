import {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} from "npm:discord.js@14";

export const data = new SlashCommandBuilder()
  .setName("server")
  .setDescription("Provides information about the server.");

export const execute = async (interaction: ChatInputCommandInteraction) => {
  // interaction.guild is the object representing the Guild in which the command was run
  if (!interaction.guild) {
    await interaction.reply("This command must be run in a server.");
    return;
  }

  await interaction.reply(
    `This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`
  );
};
