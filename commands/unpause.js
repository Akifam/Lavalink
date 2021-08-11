module.exports = {
    name: 'unpause',
    description: 'Unpauses a song!',
    execute(message, args, cmd, client, Discord){
        const player = client.manager.get(message.guild.id);
        if(!player.paused) {
            return message.channel.send("Player is already playing!"); 
        } else {
            player.pause(false);
            message.channel.send("Player is now playing!");
        }
    }
}