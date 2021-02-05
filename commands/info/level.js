const db = require('quick.db')
const discord = require('discord.js')
const { getInfo } = require("../../handlers/xp.js")

module.exports = {
  name: "level",
  desciption: "Get the level of author or mentioned",
  usage: "level <user>",
  category: "info",
  run: (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    let eambed = new discord.MessageEmbed()
    .setAuthor("(:x:)Bot do not have levels")
    .setColor("#ff2050")
    
    let gembed = new discord.MessageEmbed()
    .setAuthor("😉 | I am on level 100")
    .setColor("#ff2050")
    
    let h = new discord.MessageEmbed()
    .setAuthor(`**${user.tag}** is out of the xp`)
    .setColor(`RED`)
    
 message.channel.send(embed) 
      if(user.id === client.user.id) { //IF BOT
      return message.channel.send(gembed)
    }
    
    if(user.bot) {
      return message.channel.send(eambed)
    }
    
    let xp = db.get(`xp_${user.id}_${message.guild.id}`) || 0;
    
    const {level, remxp, levelxp} = getInfo(xp);
    if(xp === 0) return message.channel.send(h)
    
    const five = message.guild.roles.cache.find(r => (r.name === 'level 5') || (r.name === 'level 5+'))
    if(!five) return message.channel.send(`(❌)Cannot find role with name 'level 5'!`)
    if(level === 5) { user.roles.add(five) }
    
    let embed = new discord.MessageEmbed()
    .setAuthor(user.username, message.guild.iconURL())
    .setColor("#ff2050")
    .setThumbnail(user.avatarURL())
    .setDescription(`**LEVEL** - ${level}
**XP** - ${remxp}/${levelxp}`)
    
 message.channel.send(embed) 
    
  }
}