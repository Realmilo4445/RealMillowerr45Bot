const canva = require('canvacord')
const discord = require('discord.js')
module.exports = {
  name: "hitler",
  category: "fun",
  usage: "hitler <mention>",
  description: "hitler",
  run: async(client, message, args) => {
    let user = message.mentions.users.first() || message.author
    let avatar = user.displayAvatarURL({format: 'png', dynamic: 'false'})
    let image = await canva.Canvas.hitler(avatar)
    let attachment = new discord.MessageAttachment(image, "hitler.png")
    message.channel.send(attachment)
  }
}