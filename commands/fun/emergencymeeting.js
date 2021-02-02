const canvas = require('canvas')
const Discord = require('discord.js')

module.exports = {
  name: 'emergencymeeting',
  description: 'someone is impostor!',
  category: 'fun',
  run: async(client, message, args) => {
    const Canvas = canvas.createCanvas(612, 500)
    const ctx = Canvas.getContext('2d')
    const background = await canvas.loadImage('https://cdn.discordapp.com/attachments/777065805401686027/805976093513351198/images.jpeg')
    ctx.drawImage(background, 0,0, Canvas.width, Canvas.height)
    ctx.fillText(args, 50, 100)
    ctx.font = '1000px Impact'
    const attachment = new Discord.MessageAttachment(Canvas.toBuffer(), 'emergencymeeting.png')
    message.channel.send(attachment)
  }
}