const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'search',
    description: 'Searches for a song',
    async execute(message, args, cmd, client, Discord){
        const index = message.content.indexOf(" ");
        const query = message.content.slice(index + 1);
        const results = await client.manager.search(query, message.author);
        const tracks = results.tracks.slice(0, 10);
        let resultsDescription = "";
        let counter = 1;
        for (const track of tracks) {
          resultsDescription += `${counter}) [${track.title}](${track.uri})\n`;
          counter++;
        }
        const embed = new MessageEmbed().setDescription(resultsDescription);
        message.channel.send(
          "What song would you like to choose? Enter the number.",
          embed
        );
        const response = await message.channel.awaitMessages(
          (msg) => msg.author.id === message.author.id,
          {
            max: 1,
            time: 30000,
          }
        );
        const answer = response.first().content;
        const track = tracks[answer - 1];
        const player = client.manager.players.get(message.guild.id);
        if (player) {
          player.queue.add(track);
          message.channel.send(`${track.title} was added to the queue.`);
        } else {
          message.channel.send(
            "The bot is not playing a song for it to add into the queue or does not have a player existing."
          );
        }
    }
}