const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with latency in ms."),
  async execute(interaction) {
    let poogers = "<:poogers:789029386212212736>";
    let pain = "<:pain:789029279169904680>";
    let ping = Math.round(interaction.client.ws.ping);
    let emoji;
    if (ping > 100) {
      emoji = pain;
    } else {
      emoji = poogers;
    }
    await interaction.reply(`${emoji} - Latency is ${ping}ms`);
  },
};
