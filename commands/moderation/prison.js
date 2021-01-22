const Discord = require('discord.js')
const ms = require('ms')
const All = ["Admin","Host","Moderator","Artist","Member","Level 5","Level 10","Level 25","Level 50","Youtuber","POTD Ping","Announcement Ping","Patreon [3]","Patreon [2]","Patreon [1]","Youtube Membership","Boosted","🌟VIP","???","Bot","👑Owner","!","Verified","Youtube Ping","Tweet Ping"]
module.exports = {
  name: "prison",
  category: "moderation",
  description: "go to prison!",
  run: async(client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Sorry but you do not have permission to prison anyone"
      );
    }
     if(!message.member.hasPermission("ADMINISTRATOR")) { return message.channel.send("You are not allowed or do not have permission to prison everyone")    }
    const { guild } = message
    const role = guild.roles.cache.find((role) => {
      return role.name === "Inmate"
    })
    const rolea = guild.roles.cache.find((role) => {
      return rolea.name === All
    })
    
    const member = message.mentions.user.first().username
    member.roles.add(role)
    member.roles.remove(All)
    let time = "10s",
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Successfully prison **${member}**!`)
    .setColor(`GREEN`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
    .setTimestamp()
    message.channel.send(embed)
}
}