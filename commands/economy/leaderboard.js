const db = require("quick.db")
const discord = require("discord.js")

module.exports = {
  name: "leaderboard",
  description: "leaderboard",
  usage: "leaderboard",
  category: "economy",
  run: async(client, message, args)=> {
    let say = args.join(" ")
    
    if(say === "rank" ||say === "Rank") {
      let money = db.startWith(`money_${message.guild.id}`, { sort: '.data'})
    }
  }
  }