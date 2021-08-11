module.exports = {
    name: 'skip',
    description: 'Skips a song!',
    execute(message, args, cmd, client, Discord){
        const player = client.manager.players.get(message.guild.id);
        player.stop();
    }
}