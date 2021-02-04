const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {
  name: 'leaderboard',
  description: 'global leaderboard',
  usage: 'leaderboard',
  aliases: ['lb'],
  run: async(client, message, args) => {
    let lb = db.all().filter(a => a.ID.startsWith('money_')).sort((a, b) => b.data - a.data)
    
    let i = 0
    let place = 1
    let txt = ""
    
    for(i in lb) {
      txt += `${place++}. <@${lb[i].NAME.split('_')[1]}> - ${lb[i].data}$\n`
    }
    
    let embed = new Discord.MessageEmbed()
    .setAuthor(txt)
    .setFooter(message.guild.name)
    message.channel.send(embed)
  }
}