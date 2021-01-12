const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')
 
 module.exports = {
name: "canvas",
  category: "info",
  aliases: ["kitsu"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  run: (client, message, args) => {
  
// Write "Awesome!"
ctx.font = '30px Impact'
ctx.rotate(0.1)
ctx.fillText('Awesome!', 50, 100)
 
// Draw line under text
var text = ctx.measureText('Awesome!')
ctx.strokeStyle = 'rgba(0,0,0,0.5)'
ctx.beginPath()
ctx.lineTo(50, 102)
ctx.lineTo(50 + text.width, 102)
ctx.stroke()
 
// Draw cat with lime helmet
loadImage('examples/images/lime-cat.jpg').then((image) => {
  ctx.drawImage(image, 50, 0, 70, 70)
})
    message.channel.send(text)
  }
 }