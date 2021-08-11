require('dotenv').config();
const Discord = require('discord.js');
const { Client } = require('discord.js');

const fs = require('fs');

const client = new Client();

client.manager = require('./manager')(client);

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
});

client.once("ready", () => {
    client.manager.init(client.user.id);
});
client.on("raw", (d) => client.manager.updateVoiceState(d));

client.login(process.env.token)

