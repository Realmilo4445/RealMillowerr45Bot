const canva = require('canvacord')
const discord = require('discord.js')
module.exports = {
  name: "triggered",
  category: "fun",
  usage: "triggered <mention>",
  description: "Triggered",
  run: async(client, message, args) => {
    let user = message.mentions.users.first() || message.author
    let avatar = user.displayAvatarURL({format: 'png', dynamic: 'false'})
    let image = await canva.Canvas.trigger(avatar)
    let attachment = new discord.MessageAttachment(image, "trigger.gif")
    message.channel.send(attachment)
  }
}