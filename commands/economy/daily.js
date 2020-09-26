const Discord = require('discord.js');
const config = require('../../config.json');
const db = require('quick.db');
const ms = require('parse-ms')

module.exports = {
  name: "daily",
  description: "get daily rewards",
  aliases: ["d"],
  usage: "daily",
  category: "economy",
  run:async(clients, message, args) => {
    let prefix = await db.fetch(`prefix_${message.guild.id}`)
    if (prefix == null) {
      prefix = config.Default_PREFIX
    }
    
    let amount = 100
    let timeout = 8640000
    
    let daily = await db.fetch(`daily_${`a)
    
  }
}
