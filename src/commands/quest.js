module.exports = async (msg, args) => {
  const addOn = args.join('+');
  await msg.channel.send(`https://divinityoriginalsin2.wiki.fextralife.com/${addOn}`);
};
