const Discord = require("discord.js")
 
module.exports = {
    name: "ship",
    category: "info",
    usage: 'ship <user1> <user2',
    description: 'shipping name',
    run: async (client, message, args) => {
      let es = new Discord.MessageEmbed()
      .setAuthor("(❌)You forgot to mention someone!")
      .setColor(`RED`)
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      .setTimestamp()
      
      let is = new Discord.MessageEmbed()
      .setAuthor("(❌)You forgot to mention someone else!")
      .setColor(`RED`)
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      .setTimestamp()
      
      let us = new Discord.MessageEmbed()
      .setAuthor(`(❌)I couldn't find someone named ${args[0]}!`)
      .setColor(`RED`)
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      .setTimestamp()
      
      let as = new Discord.MessageEmbed()
      .setAuthor(`(❌)I couldn't find someone named ${args[1]}!`)
      .setColor(`RED`)
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      .setTimestamp()
      
      let embed = new Discord.MessageEmbed()
        if (!args[0]) return message.channel.send(es)
        if (!args[1]) return message.channel.send(is)
 
        if (args[0] || args[1]) {
            var FirstUser = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            var SecondUser = message.mentions.members.first(-1) || message.guild.members.cache.get(args[1])
 
            if (!FirstUser) return message.channel.send(us)
            if (!SecondUser) return message.channel.send(as)
 
            if (FirstUser || SecondUser) {
                const FirstUserSliced = FirstUser.user.username.slice(0, FirstUser.user.username.length / 2)
                const SecondUserSliced = SecondUser.map(user => { return user.user.username.slice(user.user.username.length / 2) })
                const SecondUserName = SecondUser.map(user => { return user.user.username })
 embed.setAuthor(`${FirstUser.user.username} + ${SecondUserName} = ${FirstUserSliced}${SecondUserSliced}`)
 embed.setColor(`RED`)
 embed.setTimestamp()
                message.channel.send(embed)
            }
        }
    }
}