const Discord = require('discord.js')

module.exports = {
  name: "mute",
  description: "Change the bot status",
  usage: "mute <@mention> <reason>",
  category: "moderation",
  run: async (client, message, args) => {
    
     if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "(❌)Sorry but you do not have permission to unmute anyone"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("(❌)I do not have permission to manage roles.");
    }
    
    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "(❌)Please mention the member to who you want to unmute"
      );
    }
 
    if(user.id === message.author.id) {
      return message.channel.send("(❌)I won't mute you -_-");
    }
    
      let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("(❌)Please Give the reason to mute the member")
    }
    
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
      if(!muterole) {
      return message.channel.send("(❌)This server do not have role with name `Muted`")
    }
    
     if(user.roles.cache.has(muterole)) {
      return message.channel.send("(✅)Given User is already muted")
    }
    
    user.roles.add(muterole)
    let embed = new Discord.MessageEmbed()
    .setAuthor(`You muted **${message.mentions.users.first().username}** For \`${reason}\``)
    .setColor(`GREEN`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
await message.channel.send(embed)
    
    user.send(`You are muted in **${message.guild.name}** For \`${reason}\``)
    
  }
}