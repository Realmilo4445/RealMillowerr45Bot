const Discord = require('discord.js')
const db = require('quick.db');
module.exports = {
    name: "leaderboard",
    category: "economy",
    description: "Work your a** off",
    async run (client, message, args) {
      let money = db.startsWith(`money_${message.guild.id}`, { sort: '.data'})
      let content = ""
      
      for(let i = 0; i < money.length; i++) {
        let user = message.bot.users.get(money[i].ID.split("_")[2]).username
        
        content += `${i+1}. ${user} ~ ${money[i].data}$\n`
      }
      
      const embed = new Discord.RichEmbed()
      .setAuthor(`${message.guild.name} - Leaderboard!`, message.guild.iconURL)
      .setDescription(content)
    }
}