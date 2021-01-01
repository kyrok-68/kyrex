const discord = require('discord.js');
const bot = new Discord.Client({disableEverione: true});

bot.on('ready' , async () =>{
  bot.user.setActivity('kyrex, bonjour!');
});

bot.login(process.env.kyrex_token);
