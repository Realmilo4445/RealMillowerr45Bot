const canvas = require('canvas')
const Discord = require('discord.js')

module.exports = {
  name: 'emergencymeeting',
  description: 'someone is impostor!',
  category: 'fun',
  run: async(client, message, args) => {
    const Canvas = canvas.createCanvas(700, 250)
    const ctx = canvas.getContext('2d')
    const background = await canvas.loadImage('https://cdn.discordapp.com/attachments/777065805401686027/805976093513351198/images.jpeg')
    ctx.drawImage(background, 0,0, Canvas.width, Canvas.height)
    ctx.fillText(args, 50, 80)
    const attachment = new Discord.MessageAttachment(Canvas.tobuffer(), 'emergencymeeting.png')
    message.channel.send(attachment)
  }
}