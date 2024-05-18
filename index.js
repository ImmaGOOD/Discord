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
    .setAssetsLargeImage('https://img2.pic.in.th/pic/ezgif-6-87e23df9ab.gif') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('BDSM') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.tenor.com/bx7hbOEm4gMAAAAj/sakura-leaves.gif') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('DOM') //Text when you hover the Small image
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
