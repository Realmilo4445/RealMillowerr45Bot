const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../.././config.json")

module.exports = {
    name: "romanticword",
    category: "info",
    description: "Returns latency and API romantic",
    usage: "romanticword",
    run: async (client, message, args) => {
      
    let embed = new MessageEmbed()
    .setColor(COLOR)
      
    if(!args.length) {
      embed.setAuthor(`**Your so beautiful, clever and so sweet :)**`)
       message.channel.send(embed)
    }
    }
  
}