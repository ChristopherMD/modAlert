// Code Creation by Mod: Webfish 4/2021 (webfish69@gmail.com)

const alerts = require('./alertPhrases.js');
const response = require('./botResponses.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const keepRunning = require('./server');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  if (msg.author.bot) return;
  if (
    alertPhrases.some((insult) => msg.content.toLowerCase().includes(insult))
  ) {
    const botResponse =
      botResponses[Math.floor(Math.random() * botResponses.length)];
    msg.reply(`${botResponse} @Discord Moderator`);
  }
});

keepRunning();
client.login(process.env.TOKEN);
