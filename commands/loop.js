module.exports = {
    name: 'loop',
    description: 'Loops a queue!',
    execute(message, args, cmd, client, Discord){
        const player = client.manager.get(message.guild.id);
        if (player.queueRepeat) {
              return message.channel.send("Queue is already on repeat")
 
         } else {
             player.setQueueRepeat(true);
                 message.channel.send("Queue is now on repeat!");
         }
    }
}