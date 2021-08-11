module.exports = {
  name: 'play',
  description: "This plays a song!",
  async execute(message, args, cmd, client, Discord) {

      if(!args.length) return message.reply("An argument must be provided!")

    const res = await client.manager.search(
      message.content.slice(6),
      message.author
    );


    const player = client.manager.create({
      guild: message.guild.id,
      voiceChannel: message.member.voice.channel.id,
      textChannel: message.channel.id,
    });

    player.connect();

    player.queue.add(res.tracks[0]);
    message.channel.send(`Enqueuing track ${res.tracks[0].title}.`);


   if (!player.playing && !player.paused && !player.queue.size)
      player.play();

    if (
      !player.playing &&
      !player.paused &&
      player.queue.totalSize === res.tracks.length
    )
      player.play();
  }
}

