const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("parse-ms")
const config = require("../../config.json")

module.exports = {
  name: "daily",
  aliases: ["d"],
  category: "economy",
  usage: "daily",
  description: "Get daily money",
  run:async(client, message, args) => {
    let prefix = await db.fetch(`prefix_${message.guild.id}`)
    if(prefix == null) {
      prefix = config.DEFAULT_PREFIX
    }
    
    let amount = 100
    let timeout = 86400000
    
    let daily = await db.fetch(`daily_${message.author.id}`)
    
    if(daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily));
      
      let embed = new Discord.MessageEmbed()
      .setDescription(`You have already to claimed your daily coins!\nWait ${time.hours}hours, ${time.minutes}minutes, ${time.secons}seconds`)
      
      message.channel.send(embed)
      
    } else {
      
      let embed = new Discord.MessageEmbed()
      .setDescription(`You have claimed ${amount} coins!`)
      db.add(`coins_${message.author.id}`, amount)
      db.set(`daily_${message.author.id}`, Date.now())
      
    }
  }
}