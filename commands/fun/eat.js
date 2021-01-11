const { MessageEmbed } = require('discord.js')
const { COLOR } = require('../../config.json')

module.exports = {
  name: "eat",
  description: "eat anything",
  usage: "eat <food>",
  category: "fun",
  run: async (client, message, args) => {
     let Embed = new MessageEmbed()
     const content = args.join(" ")
     Embed.setColor(COLOR)
     Embed.setDescription(`You ate **${content}**`)
     Embed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
     message.channel.send(Embed)
  }
}