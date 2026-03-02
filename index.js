const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('clientReady', () => {
  console.log('Bot is online!');
});

client.on('messageCreate', message => {
  if (message.content === '!hello') {
    message.reply('Hello!');
  }
});

client.login(process.env.TOKEN);