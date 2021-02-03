const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwelcome",
  category: "moderation",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",
  run: async(client, message, args) => {
    
    let channel = message.mentions.channels.first() //mentioned channel
    let es = new Discord.MessageEmbed()
    .setAuthor("(❌)Please Mention the channel first")
    .setColor(`GREEN`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
    if(!channel) { //if channel is not mentioned
      return message.channel.send(es)
    }
    
    //Now we gonna use quick.db
    
    db.set(`welchannel_${message.guild.id}`, channel.id) //set id in var
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Welcome Channel is seted as ${channel}`)
    .setColor(`GREEN`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
    
    message.channel.send(embed) //send success message
  }
}