const Discord = require('discord.js')

module.exports = {
  name: "serverinfo",
  category: "info",
  description: "serverinfo",
  run: async(message, client, args) => {
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Server Name: ${message.guild.name}`)
    .setDescription(`Member: ${message.guild.memberCount}`)
    message.channel.send(embed)
  }
}