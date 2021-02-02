const Discord = require('discord.js')
const db = require('quick.db')
const moment = require('moment')

module.exports = {
  name: "leaderboard",
  description: "global leaderboard",
  category: "economy",
  usage: "leaderboard <economy> or leaderboard <checklist>",
  run: async(client, message, args) => {
    let say = args.join(" ")
    
    if (say === "Money") {
    let profiles = new db.table("profiles");
    if(!profiles)return message.channel.send("Unknown generated data.");
      
    const leaderboardMoney = profiles.all().sort()
      
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.guild.name} Economy Leaderboard!`, message.guild.iconURL({size: 2048, dynamic: true}))
    .setThumbnail(message.guild.iconURL({size: 4096, dynamic:true}))
    .setDescription()
    .setFooter(``)
    return message.channel.sen(embed)
   }
  }
}