module.exports = {
    name: 'stop',
    description: 'Stops a song from playing',
    execute(message, args, cmd, client, Discord){
        const player = client.manager.get(message.guild.id);
        player.destroy();
        message.channel.send("Stopped playing!");
    }
}