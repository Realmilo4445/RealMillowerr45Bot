const Discord = require('discord.js')
const db = require('quick.db')
const moment = require('moment')

module.exports = {
  name: "leaderboard -unfinished",
  description: "global leaderboard",
  usage: "leaderboard <economy> or leaderboard <checklist>",
  run: async(client, message, args) => {
    let say = args.join(" ")
    
    if (say === "economy") {
    let data = db.get("account");
    if(!data)return message.channel.send("Unknown generated data.");
    
    var limit = 15;
    
    let lastpage = Math.ceil(Object.Keys(data).length / limit)
    let page = parseInt(args[0]);
    if(!page) page = 1;
    if(page > lastpage) return message.channel.send(`Sorry, there is no **page ${page}** dm RealMillowerr45#2048.`);
      
    let frompages = limit * (page - 1);
    let pageslimit = 15 * page;
      
    let list = Object.entries(data).sort((a, b, c) => b[1].money - a[1].worked - c[1].robbed).slice(frompages, pageslimit);
    let arr = []
    
    for(var i in list) {
      arr.push(`**${i * 1 +1 + frompages}.** ${message.guild.members.cache.get(list[i][0]) ? message.guild.members.cache.get(list[i][0]).user.tag : "UnknownUser"} - Money: **${list[i][1].money}** | Work: **${list[i][1].worked}** | Rob: **${list[i][1].robbed}**`);
    };
      
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.guild.name} Economy Leaderboard!`, message.guild.iconURL({size: 2048, dynamic: true}))
    .setThumbnail(message.guild.iconURL({size: 4096, dynamic:true}))
    .setDescription(arr.join("\n"))
    .setFooter(`Page ${page} / ${lastpage}`)
    return message.channel.sen(embed)
   }
  }
}