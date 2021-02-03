const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "warn",
  usage: "warn <@metion> <reason>",
  category:"moderation",
  description: "warn all",
  run: async (client, message, args) => {
    
if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You should have admin perms to use this command!")
    }
    
    const user = message.mentions.members.first()
    
     if(!user) {
       let esed = new MessageEmbed()
       .setAuthor(`Please Mention the person to sh`)
      return message.channel.send("Please Mention the person to who you want to warn - warn @mention <reaosn>")
    }
    
    
    const reason = args.slice(1).join(" ")

  if(!reason) {
      return message.channel.send("Please provide reason to warn - warn @mention <reason>")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === 3) {
      return message.channel.send(`${message.mentions.users.first().username} already reached his/her limit with 3 warnings`)
    }

     if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
      let ebed = new MessageEmbed()
      .setAuthor(`You warned **${message.mentions.users.first().username} for ${reason}`)
      .setColor(`GREEN`)
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      await message.channel.send(ebed)//DO NOT FORGET TO USE ASYNC FUNCTION
    }
    
    else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
      let embed = new MessageEmbed()
      .setAuthor(`You warned 2 for ${reason}`)
      .setColor(`GREEN`)
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      await message.channel.send(embed) //DO NOT FORGET TO USE ASYNC FUNCTION
    }
    
}
}