const Discord = require('discord.js')
const { COLOR } = require('../../config.json')

module.exports = {
  name: "link",
  category: "moderation",
  description: "Send link to invite my bot",
  run : async (client, message, args) => {
    let Embed = new Discord.MessageEmbed()
    const here = '[invite](https://discord.com/api/oauth2/authorize?client_id=773761326858240020&permissions=8&scope=bot)'
    Embed.setColor(COLOR)
    Embed.setDescription('You Can [Invite](https://discord.com/api/oauth2/authorize?client_id=773761326858240020&permissions=8&scope=bot) Bot Here You can [Vote](https://top.gg/bot/773761326858240020) here')
    message.channel.send(Embed)
  }
}