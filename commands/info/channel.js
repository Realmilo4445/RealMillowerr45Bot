const Discord = require('discord.js')

module.exports = {
  name: 'channel',
  usage: 'channel <channelmention',
  description: 'channel mention',
  category: 'info',
  run: async(client, message, args) => {
    let m = new Discord.MessageEmbed()
    .setAuthor()
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
    .setColor()
    .setTimestamp()
    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
    if(!channel)return message.channel.send("Please mention channel for channel id!")
    
    let embed = new Discord.MessageEmbed()
    .setAuthor("Channel id:" + channel.id)
    .setColor(`RANDOM`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    message.channel.send(embed)
  }
}