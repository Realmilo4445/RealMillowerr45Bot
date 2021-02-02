const discoed = require('discord.js')
const translate = require('@k3rn31pan1c/google-translate-api')

module.exports = {
  name: 'translate',
  usage: 'translate <languange>',
  category: 'utilities',
  description: 'google translate',
  run: async(client, message, args) => {
    let languange = args[0]
    let text = args.slice[1].join(" ")
    if(!languange) return message.channel.send("What languange am i supposed to do?")
    if(languange.length !== 2)return message.channel.send("Languange must be 2 letter alias. E.g `English > en`")
    if(!text)return message.channel.send("What am i supposed to translate")
    
  }
}