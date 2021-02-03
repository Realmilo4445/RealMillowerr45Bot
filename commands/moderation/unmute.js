const Discord = require('discord.js')

module.exports = {
  name: "unmute",
  usage: 'unmute <@mention>',
  description: "Change the bot status",
  category: "moderation",
  run: async (client, message, args) => {
    
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      message.delete()
      return message.channel.send(
        "(❌)Sorry but you do not have permission to unmute anyone"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      message.delete()
      return message.channel.send("(❌)I do not have permission to manage roles.");
    }
    
    const user = message.mentions.members.first();

    if (!user) {
      let eme = new Discord.MessageEmbed()
      .setColor(`GREEN`)
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      .setAuthor(`(❌)Please mention who want to unmute`)
      return message.channel.send();
    }
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
 if(user.roles.cache.has(muterole)) {
      message.delete()
      return message.channel.send("(❌)Given User do not have mute role so what i am suppose to take")
    }
    
       user.roles.remove(muterole)
    let embed = new Discord.MessageEmbed()
    .setAuthor(`**${message.mentions.users.first().username}** is unmuted`)
    .setColor(`GREEN`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
    await message.channel.send(embed)
    
    user.send(`You are now unmuted from **${message.guild.name}**`)

    
  }
}