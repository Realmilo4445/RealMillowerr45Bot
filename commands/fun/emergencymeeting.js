const canvas = require('canvas')
const Discord = require('discord.js')

module.exports = {
  name: 'emergencymeeting',
  description: 'someone is impostor!',
  category: 'fun',
  run: async(client, message, args) => {
    const Canvas = canvas.createCanvas(700, 250)
    const ctx = canvas.getContent('2d')
    const background = await canvas.loadImage('')
  }
}