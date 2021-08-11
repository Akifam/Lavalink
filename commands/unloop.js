module.exports = {
    name: 'unloop',
    description: '',
    execute(message, args, cmd, client, Discord){
        const player = client.manager.get(message.guild.id);
        player.setQueueRepeat(false);
        message.reply("Player is no longer on repeat.");
    }
}