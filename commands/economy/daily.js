const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
const Config = require('../../config.json')

module.exports = {
  name: "daily",
  aliases: ["d"],
  description: "Get daily money",
  usage: "daily",
  run:async(client, message, args) => {
    let prefix = await db.fetch(`prefix_${message.guild.id}`)
    if(prefix == null) {
      prefix = config.DEFAULT_PREFIX
    }
    
    let amount = 100
    let timeout = 86400000
    
    let daily = await db.fetch(`daily_${message.author.id}`)
    
    if(daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now()))
    }
  }
}