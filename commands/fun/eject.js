const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "eject",
  usage: "eject <@metion>",
  category:"moderation",
  description: "eject all",
  run: async (client, message, args) => {
    

    const user = message.mentions.members.first()
    
     if(!user) {
      return message.channel.send("Please Mention the person to who you want to eject - eject @mention ")
    }
    
      if(message.mentions.users.first().bot) {
      return message.channel.send("You can not eject bots")
    }
    
     if(message.author.id === user.id) {
      return message.channel.send("You can not eject yourself")
    }
    
        if(message.author.id === message.guild.owner.id) {
      return message.channel.send("You jerk, how you can eject server owner -_-")
    }
    
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === 3) {
      return message.channel.send(`${message.mentions.users.first().username} already reached his/her limit with 3 eject`)
    }
    
     if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`**${message.guild.name}** Was not an impostor`)
      await message.channel.send(`**${message.mentions.users.first().username}** Was not an impostor`)//DO NOT FORGET TO USE ASYNC FUNCTION
    }
    
    else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(`**${message.guild.name}** Was not an impostor`)
      await message.channel.send(`You eject 2 `) //DO NOT FORGET TO USE ASYNC FUNCTION
    }
    
}
}