const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../.././config.json")

module.exports = {
  name: "haha",
  category: "info",
  usage: "haha",
  description: "*laugh*",
  run: async(client, message, args) => {

let Embed = new MessageEmbed()
.setColor(COLOR)

if (!args.length) {
Embed.setAuthor(`What funny??`)

message.channel.send(Embed)
}
  }
}