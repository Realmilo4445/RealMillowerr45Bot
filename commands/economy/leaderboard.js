const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {
  name: 'leaderboard',
  description: 'global leaderboard',
  usage: 'leaderboard',
  aliases: ['lb'],
  run: async(client, message, args) => {
    let money = db.startsWith(`money_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < money.length; i++) {
        let user = client.users.get(money[i].ID.split('_')[2]).username

      

        content += `${i+1}. ${user} ~ ${money[i].data}\n`
    
      }

    const embed = new Discord.RichEmbed()
    .setDescription(`**${message.guild.name}'s Coin Leaderboard**\n\n${content}`)
    .setColor("#FFFFFF")

    message.channel.send(embed)
  }
}