const db = require("quick.db")
const discord = require("discord.js")
const moment = require("moment")

module.exports = {
  name: "leaderboard",
  description: "leaderboard",
  usage: "leaderboard",
  category: "economy",
  run: async(client, message, args)=> {
    let say = args.join(" ")
    
    if(say === "economy" ||say === "Economy") {
      let data = db.get("account")
      if(!data) return message.channel.send("unknown generated data")
      let content = ""

      var limit = 50
      
      let lastpage = Math.cell(Object.keys(data).length / limit)
      let page = parseInt(args[0])
      if(!page) page = 1
      if(page > lastpage)return message.channel.send(`Sorry, there is no **Page ${page}** dm RealMillowerr45#2048!`)
     
      let frompages = limit * (page - 1)
      let pages = 15 * page
      let pagg = Object.entries(data).sort((a,b)=> a[1].worked - b[1].robbed.slice(frompages, pages))
      let arr = []
      
      for(var i in pagg){
        arr.push(`**${i * 1 + 1 + frompages}** ${message.guild.member.cache.get(pagg)}`)

      }
      let embed = new discord.RichEmbed()
      .setAuthor(`${message.guild.name} - Economy Leaderboard!`, message.guild.iconURL)
      .setDescription(content)
      .setTimestamp()
      
      message.channel.send(embed)
    }
  }
  }