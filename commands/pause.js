module.exports = {
    name: 'pause',
    description: 'Pauses a song!',
    execute(message, args, cmd, client, Discord){
        const player = client.manager.get(message.guild.id);
        if(player.paused) {
            return message.channel.send("Player is already paused!");
        } else {
            player.pause(true);
            message.channel.send("Player is now paused!");
        }
    }
}