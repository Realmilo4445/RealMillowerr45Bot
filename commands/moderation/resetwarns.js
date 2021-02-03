const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "resetwarns",
  category:"moderation",
  description: "resetwarn all",
  run: async (client, message, args) => {
    
      if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.delete()
      return message.channel.send("(❌)You should have admin perms to use this command")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
      let a = new MessageEmbed()
      .setAuthor(`(❌)Please mention the person whose warning you want to reset`)
      .setColor(`GREEN`)
      .setFooter(message.author.tag, message.authir.displayAvatarURL({dynamic: true}))
    return message.channel.send(a)
    }
    
    if(message.mentions.users.first().bot) {
      message.delete()
      return message.channel.send("(❌)Bot are not allowed to have warnings")
    }
    
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
     if(warnings === null) {
       let es = new MessageEmbed()
       .setAuthor(`(❌)${message.mentions.users.first().username} do not have any warnings`)
       .setColor(`GREEN`)
       .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      return message.channel.send(es)
    }
    
    let embed = new MessageEmbed()
    .setAuthor(`Reseted all warnings are reseted by ${message.mentions.users.first().username}`)
    .setColor(`GREEN`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
    db.delete(`warnings_${message.guild.id}_${user.id}`)
    user.send(`Your all warnings are reseted by ${message.author.username} from ${message.guild.name}`)
    await message.channel.send(embed) //DO NOT FORGET TO USE ASYNC FUNCTION
    
    
  }
}