const quest = require('./quest');

const guildID = process.env.GUILD_ID;
const channelID = process.env.CHANNEL_ID;

const commands = {
  quest,
};

const config = require('../config.json');

module.exports = async (msg) => {
  if (msg.guild.id === guildID && msg.channel.id === channelID) {
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (Object.keys(commands).includes(command)) {
      commands[command](msg, args);
    }
  }
};
