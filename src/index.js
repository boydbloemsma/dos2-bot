const Discord = require('discord.js');

require('dotenv').config();

const config = require('./config.json');

const client = new Discord.Client();

const guildID = '156473130427088898';
const channelID = '683713815334223882';

client.on('message', async (msg) => {
  if (msg.guild.id === guildID && msg.channel.id === channelID) {
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'quest') {
      const addOn = args.join('+');
      await msg.channel.send(`https://divinityoriginalsin2.wiki.fextralife.com/${addOn}`);
    }
  }
});

client.login(process.env.BOT_TOKEN);
