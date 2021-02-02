const Discord = require('discord.js')

module.exports = {
  name: 'say',
  category: 'info',
  description: 'say if you want',
  usage: 'say <args>',
  run: async(client, message, args) => {
    let saying = args.join (" ")
    let embed = new Discord.MessageEmbed()
    .setAuthor(saying)
    .setColor(`RANDOM`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
    .setTimeStamp()
    message.channel.send(embed)
  }
}