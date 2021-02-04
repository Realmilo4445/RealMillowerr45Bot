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
    let place = 0
    let txt = ""
    
    if(i in lb) {
      txt += `${place++}. <@${lb[i].ID.split('_')[1]}> - ${lb[i].data}`
    }
    
    let embed = new Discord.MessageEmbed()
    .addField(txt)
    .setFooter(message.guild.name)
    .setThumbnail(message.guild.iconURL())
  }
}