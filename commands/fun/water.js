const canva = require('canvacord')
const discord = require('discord.js')
module.exports = {
  name: "water",
  category: "fun",
  usage: "triggered <mention>",
  description: "Triggered",
  run: async(client, message, args) => {
    let image = await canva.Canvas.water(args)
    let attachment = new discord.MessageAttachment(image, "water.png")
    message.channel.send(attachment)
  }
}