const fs = require('fs')
const { MessageEmbed } = require('discord.js')
const db = require('quick.db');
const { rocketEmoji } = '🚀';

module.exports = {
  name: "ejectImpostor",
  category: "fun",
  description: "eject <@metion>",
  run: async(client, message, args) => {
    
    let Embed = new MessageEmbed()
    
    const url = "https://lh3.googleusercontent.com/DjukZ3eSbRkBpc_1KX-Q7H0zKQqi1QkaZJtgD0TZnogoYC4QKfIlCc53DT4LH4f228AudTza=w1280"
    
    const user = message.mentions.members.first()
    
     if(!user) {
      return message.channel.send("Please Mention the person to who you want to warn - warn @mention <reaosn>")
    }
    
    Embed.setTitle(`${message.mentions.users.first().username} Was not an impostor`)
    .setColor("RED")
      if(message.mentions.users.first().username) {
      return message.channel.send(Embed)
        
    } else {
      let Embed = new MessageEmbed()
      .setColor("RED")
      Embed.setTitle(`${message.mentions.users.first().username} Was an impostor`)
      message.channel.send(Embed)
    }

    
  }
}