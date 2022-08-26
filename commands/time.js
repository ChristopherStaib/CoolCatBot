const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("time")
    .setDescription("Replies with current date/time."),
  async execute(interaction) {
    let d = new Date();
    d = d.toLocaleString();
    await interaction.reply("The current date/time is " + d);
  },
};
