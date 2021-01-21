const Discord = require('discord.js')
const db = require('quick.db');
module.exports = {
    name: "leaderboard",
    category: "economy",
    description: "Work your a** off",
    async run (client, message, args) {
      let money = db.startsWith(`money_${message.guild.id}`, { sort: '.data'})
      
      for(let i = 0; i < money.length; i++) {
        let user
      }
    }
}