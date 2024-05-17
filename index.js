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
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1227880335069548604/1240713219169849455/ezgif-6-87e23df9ab.gif?ex=66478fba&is=66463e3a&hm=8498880f167adf7574771b28975167f47fbc2074f5a60e37a0de22c173c51dfb&=') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('BDSM') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1227880335069548604/1240719319529295872/193c648ab15187e2e23e968f5f2bdc44.gif?ex=66479569&is=664643e9&hm=82c317ab04322cf86cf23528eed864afd1e812dbdc4d3ef3544ab158da150269&') //You can put links in tenor or discord and etc.
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
