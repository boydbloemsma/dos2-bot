const rp = require('request-promise');
const $ = require('cheerio');

module.exports = async (msg, args) => {
  const addOn = args.join('+');
  const url = `https://divinityoriginalsin2.wiki.fextralife.com/${addOn}`;

  rp(url).then((html) => {
    const questHeaders = [];
    const objectives = [];
    const textFields = [];
    $('div#wiki-content-block > h3', html).map((i, elm) => questHeaders.push($(elm).text()));
    $('div#wiki-content-block > ol > li', html).map((i, elm) => objectives.push($(elm).text()));
    $('div#wiki-content-block > p', html).map((i, elm) => textFields.push($(elm).text()));

    for (let i = 8; i < (textFields.length - 2); i++) {
      console.log(textFields[i]);
    }
    // console.log(objectives);
  });

  // await msg.channel.send(`https://divinityoriginalsin2.wiki.fextralife.com/${addOn}`);
};
