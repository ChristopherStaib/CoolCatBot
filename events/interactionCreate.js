/**
 * Event ran on /command used. Will run the appropriate command given.
 */
module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    // interaction is of type ChatInputCommandInteraction
    console.log(
      `${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`
    );
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  },
};
