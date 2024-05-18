const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Bangkok', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1240711154741936128')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=QRF9TgkBCjc') //Must be a youtube video link 
    .setState('Spanking')
    .setName('DeliriumHD')
    .setDetails(`One night Stand `)
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/458516662786981910/1241411323158462495/ezgif-6-87e23df9ab.gif?ex=664a19e3&is=6648c863&hm=52a9cb4ca89931dd311db9edf1bdab4667642190b3cae57771d565634afeabb5&=') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('BDSM') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/458516662786981910/1241413206786969720/1ba797fd454ccc27a3d9de6e232ec3b8aa47e8d9.gif?ex=664a1ba4&is=6648ca24&hm=bb6d99ea882c2ae21dd2b1a3dd171c18612d4d2c9ac9c8b693d0d5c2299e8c21&=') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('FWB') //Text when you hover the Small image
    .addButton('Instagram', 'https://www.instagram.com/deliriumhd/')


  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `DM 24/7`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 500); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
