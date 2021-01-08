const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../.././config.json")

module.exports = {
    name: "lol",
    category: "info",
    description: "Says lol",
    usage: "lol",
    run: async (client, message, args) => {
      
    let embed = new MessageEmbed()
    .setColor(COLOR)
      
    if(!args.length) {
      embed.setAuthor("What do you mean?")
       message.channel.send(embed)
    }
    }
  
}