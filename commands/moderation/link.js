const Discord = require('discord.js')
const COLOR = require('../../../../config.json')

module.exports = {
  name: "link",
  category: "moderation",
  description: "Send link to invite my bot",
  run : async (client, message, args) => {
    let Embed = new Discord.MessageEmbed()
    const here = "https://discord.com/api/oauth2/authorize?client_id=773761326858240020&permissions=8&scope=bot"
    .setColor(COLOR)
    .setTitle(`You invite my bot ${here}!`)
    message.channel.send(Embed)
  }
}