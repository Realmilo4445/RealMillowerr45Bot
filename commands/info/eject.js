const { COLOR } =  require('../../config.json')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "eject",
  description: "eject all",
  category: "info",
  usage: "eject <@mentions>",
  run: async(client, message, args) => {
    let Embed = new MessageEmbed()
    .setColor(COLOR)
    Embed.setTitle(` **${message.mentions.users.first().username}** Was not an impostor`)
    message.channel.send(Embed)
    
     const user = message.mentions.members.first()
    
     if(!user) {
       Embed.setTitle(`**${message.mentions.users.first().username}** Was an impostor`)
    else
     }
  } 
}
  