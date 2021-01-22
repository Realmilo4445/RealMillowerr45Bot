const Discord = require('discord.js')
const ms = require('ms')
const All = ["Admin","Host","Moderator","Artist","Member","Level 5","Level 10","Level 25","Level 50","Youtuber","POTD Ping","Announcement Ping","Patreon [3]","Patreon [2]","Patreon [1]","Youtube Membership","Boosted","🌟VIP","???","Bot","👑Owner","!","Verified","Youtube Ping","Tweet Ping"]
module.exports = {
  name: "jail",
  category: "moderation",
  description: "go to prison!",
  run: async(client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Sorry but you do not have permission to jail anyone"
      );
    }
    let targetUser = message.mentions.members.first()
     if(!message.member.hasPermission("ADMINISTRATOR")) { return message.channel.send("You are not allowed or do not have permission to jail everyone")    }
    const { guild } = message
    const role = guild.roles.cache.find((role) => {
      return role.name === "Inmate"
    })
    const rolea = guild.roles.cache.find((rolea) => {
      return rolea.name === All
    })
    
    const member = guild.member.cache.get(targetUser.id)
    member.roles.add(role)
    member.roles.remove(All)
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Successfully jailde **${targetUser}**!`)
    .setColor(`GREEN`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
    .setTimestamp()
    let msg = message.channel.send(embed)
    let time = "15s"
    setTimeout(function(){
      member.roles.add("Member","Verified")
      let m = new Discord.MessageEmbed()
      .setAuthor(`${targetUser} has free`)
      msg.edit(m)
    },ms (time))
}
}