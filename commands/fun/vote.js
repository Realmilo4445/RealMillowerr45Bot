const discord = require("discord.js");
const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../.././config.json")

module.exports = {
  name: "Eject",
  category: "fun",
  description: "ban anyone with one shot xD",
  usage: "Eject <@user>",
  run: (client, message, args) => {
    
    let embed = new MessageEmbed()
    .setColor(COLOR)
    
  }
}