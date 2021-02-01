const canva = require('canvacord')
const discord = require('discord.js')
module.exports = {
  name: "trash",
  category: "fun",
  usage: "trash <mention>",
  description: "Trash",
  run: async(client, message, args) => {
    let user = message.mentions.users.first() || message.author
    let avatar = user.displayAvatarURL({format: 'png', dynamic: 'false'})
    let image = await canva.Canvas.trash(avatar)
    let attachment = new discord.MessageAttachment(image, "trash.png")
    message.channel.send(attachment)
  }
}