const Discord = require('discord.js')

module.exports = {
  name: 'say',
  category: 'info',
  description: 'say if you want',
  usage: 'say <args>',
  run: async(client, message, args) => {
    let saying = args.join(" ")
    let sy = new Discord.MessageEmbed()
    .setAuthor("(❌)Please Say If You Want")
    .setColor(`RED`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    if(!saying) return message.channel.send(sy)
    let embed = new Discord.MessageEmbed()
    .setAuthor(saying)
    .setColor(`RANDOM`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    message.channel.send(embed)
  }
}