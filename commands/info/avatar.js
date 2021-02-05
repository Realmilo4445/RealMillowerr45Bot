const Discord = require('discord.js')

module.exports = {
  name: 'avatar',
  description: 'view user avatar',
  usage: 'avatar <@mention>',
  aliases: ['av'],
  category: 'info',
  run: async(client, message, args) => {
    let user  = message.mentions.users.first() || message.author || message.guild.members.cache.get(args[0])
    if(!user) {
    return message.channel.send(`(❌)Please mention the person to show the person avatar!`)
  }
    
    let Embed = new Discord.MessageEmbed()
    .setAuthor(user.tag)
    .setImage(user.displayAvatarURL({dynamic: true}))
    message.channel.send(Embed)
  }
}