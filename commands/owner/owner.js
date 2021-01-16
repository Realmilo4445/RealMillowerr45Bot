const Discord = require('discord.js')
const { COLOR } = require('../.././config.json')

module.exports = {
  name: "owner",
  category: "moderation",
  description: "Send link to invite my bot",
  run : async (client, message, args) => {
    let Embed = new Discord.MessageEmbed()
    const here = '[Youtube](https://www.youtube.com/channel/UC3J84aa7K_uCZwBwg6j2pnA)'
    const lol = '[Twitter](https://twitter.com/millowerr45)'
    const dnt = '[Donate](https://saweria.co/Millowerr45)'
    const ha = '[Roblox Profile](https://web.roblox.com/users/1870151782/profile)'
    Embed.setColor(COLOR)
    Embed.setTitle(`Support the Owner RealMillowerr45!`)
    Embed.setAuthor('Support Owner To Get Premium Role! + New Command! + Give Roblox Soon!')
    Embed.setDescription(`Support on **[Youtube](https://www.youtube.com/channel/UC3J84aa7K_uCZwBwg6j2pnA)**, [Twitter](https://twitter.com/millowerr45), [Donate](https://saweria.co/Millowerr45), [Roblox Profile](https://web.roblox.com/users/1870151782/profile)`)
    message.channel.send(Embed)
  }
}