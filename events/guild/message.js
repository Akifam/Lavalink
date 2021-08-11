module.exports = (Discord, client, message) => {
    const prefix = process.env.prefix;
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);
    if(!command) return;
    if(command)
    try{
        command.execute(message, args, cmd, client, Discord);
    } catch (err){
        message.reply("There was an error trying to execute this command!");
        console.log(err);
    }
}