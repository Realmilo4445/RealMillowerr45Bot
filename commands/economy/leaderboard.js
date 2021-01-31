const Discord = require('discord.js')
const db = require('quick.db')
const moment = require('moment')

module.exports = {
  name: "leaderboard",
  description: "global leaderboard",
  usage: "leaderboard <economy> or leaderboard <checklist>",
  run: async(client, message, args) => {
    let say = args.join[""]
    
    if (say === "economy") {
    let data = db.get("account");
    if(!data)return message.channel.send("Unknown generated data.");
    
    var limit = 15;
    
    let lastpage = Math.ceil(Object.Keys(data).length / limit)
    let page = parseInt(args[0]);
    if(!page) page = 1;
    if(page > lastpage) return message.channel.send(`Sorry, there is no **page ${page}**.`)
      
      
      }
  }
}