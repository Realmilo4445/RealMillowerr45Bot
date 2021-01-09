const { MessageEmbed } = require("discord.js")
const { COLOR } = require('../../config.json')

const ms = require('ms')
module.exports = {
  name: "stats",
  category: "moderation",
  description: "",
  run: async (client, message, args) => {
    let embed = new MessageEmbed()
    .setTitle(`Stats for ${client.user.tags}!`)
    .setDescription(`Running Platform ${process.platform} | Uptime `)
  }
}