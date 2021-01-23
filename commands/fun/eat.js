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
     Embed.setColor(`BLUE`)
     Embed.setDescription(`You ate **${content}**`)
     Embed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
     let msg = message.channel.send(Embed)
     let embed = new MessageEmbed()
     if (content === "Hotdog" || content === "hotdog") {
       embed.setAuthor(`You ate 🌭Hotdog!`)
       msg.edit(embed)
     }
    if (content === "Tsunami" || content === "tsunami") {
       embed.setAuthor(`You ate 🌊Tsunami!`)
       msg.edit(embed)
     }
  }
}