const Discord = require('discord.js')

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
    
    const member = message.mentions.user.first().username
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Successfully`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
    .setTimestamp()
    message.channel.send(embed)
}
}