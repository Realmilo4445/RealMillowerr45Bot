const db = require("quick.db")
const discord = require("discord.js")

module.exports = {
  name: "leaderboard",
  description: "leaderboard",
  usage: "leaderboard",
  category: "economy",
  run: async(client, message, args)=> {
    let say = args.join(" ")
    
    if(say === "economy" ||say === "Economy") {
      let money = db.startsWith(`money_${message.guild.id}`, { sort: '.data'})
      let content = ""
      
      for(let i = 0;i < money.length; i++) {
        let user = client.users.get(money[i].ID.split("_")[2]).username
        
        content += `${i+1}. ${user} ~ $(money[i].data}$\n`
        
        
      }
      let embed = new discord.RichEmbed()
      .setAuthor(`${message.guild.name} - Economy Leaderboard!`, message.guild.iconURL)
      .setDescription(content)
      .setTimestamp()
      
      message.channel.send(embed)
    }
  }
  }