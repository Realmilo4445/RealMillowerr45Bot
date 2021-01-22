const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../.././config.json")

module.exports = {
    name: "update",
    category: "info",
    description: "info/update",
    run: async (client, message, args) => {
      
    let embed = new MessageEmbed()
    .setColor(COLOR)
      
    if(!args.length) {
      embed.setAuthor("If i didn't responding because we making new command or fixing bug || new command = 'instagram' command soon!")
       message.channel.send(embed)
    }
    }
  
}