const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kick anyone with one shot xD",
  usage: "kick <@user> <reason>",
  run: async(client, message, args) => {
    

if(!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`(❌)**${message.author.username}**, You do not have enough permission to use this command`)
    }

if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`(❌)**${message.author.username}**, I do not have enough permission to use this command`)
    }
    
     let target = message.mentions.users.first();
    
    if(!target) {
      return message.channel.send(`(❌)**${message.author.username}**, Please mention the person who you want to kick`)
    }

if(target.id === message.author.id) {
     return message.channel.send(`(❌)**${message.author.username}**, You can not kick yourself`)
    }

 if(!args[1]) {
   message.delete()
    return message.channel.send(`(❌)**${message.author.username}**, Please Give Reason to kick`)
  }

let embed = new discord.MessageEmbed()
    .setTitle("Action: Kick")
    .setDescription(`Banned ${target} (${target.id})`)
    .setColor(`GREEN`)
    .setFooter(`Banned by ${message.author.username}`);
    
    message.channel.send(embed)
    
    target.kick(args[1]);

target.kick(args[1]); 

    
     }
 }