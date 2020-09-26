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
      prefix = config.DEFAULT_PREFIX
    }
    
    let amount = 100
    let timeout = 86400000
    
    let daily = await db.fetch(`daily_${message.author.id}`)
    
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily));
      
      let embed = new Discord.MessageEmbed()
      .setDescription(`You have already claimed your daily coins!\nWait: ${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds, `)
      
      message.channel.send(embed)
    } else {
      let embed = new Discord.MessageEmbed()
      .setDescription(`You have claimed ${amount} coins!`)
      db.add(`coins_${message.author.id}`, amount)
      db.set(`daily_${message.author.id}`, Date.now())
      
    }
    
  }
}