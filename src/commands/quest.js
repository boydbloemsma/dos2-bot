const rp = require('request-promise');
const $ = require('cheerio');

module.exports = (msg, args) => {
  const addOn = args.join('+');
  const url = `https://divinityoriginalsin2.wiki.fextralife.com/${addOn}`;

  rp(url).then((html) => {
    const questHeaders = [];
    const importantNPCs = [];
    const objectives = [];
    let textFields = [];
    $('div#wiki-content-block > h3', html).map((i, elm) => questHeaders.push($(elm).text()));
    $('div#wiki-content-block > ul > li > a', html).map((i, elm) => importantNPCs.push($(elm).text()));
    $('div#wiki-content-block > ol > li', html).map((i, elm) => objectives.push($(elm).text()));
    $('div#wiki-content-block > p', html).map((i, elm) => textFields.push($(elm).text()));
    textFields = textFields.filter((el) => /\S/.test(el)).slice(1).join('\n\n');

    const embed = {
      color: 0xA63D40,
      title: 'Quest helper!',
      url: `${url}`,
      fields: [
        {
          name: `${questHeaders[0]}`,
          value: `${importantNPCs.join('\n')}`,
          inline: true,
        },
        {
          name: `${questHeaders[1]}`,
          value: `${objectives.join('\n')}`,
          inline: true,
        },
        {
          name: `${questHeaders[2]}`,
          value: `${textFields}`,
        },
      ],
    };

    msg.channel.send({ embed });
  });
};
