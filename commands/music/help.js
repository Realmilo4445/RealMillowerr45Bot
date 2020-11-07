const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../../config.json");

//FIRST TEST HANDLER IS WORKING OR NOT
module.exports = {
  name: "help",
  category: "music",
  description: "Pinging the bot",
  execute(client, message, args) {
    
    let embed = new MessageEmbed()
    .setColor(COLOR)
      
    if(!args.length) {
      embed.setAuthor("If you don't know how to playing music type !play <link youtube song>")
       message.channel.send(embed)
    }
    }
}
