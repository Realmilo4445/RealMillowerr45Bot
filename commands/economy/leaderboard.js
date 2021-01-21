const Discord = require('discord.js')
const db = require('quick.db');
module.exports = {
    name: "leaderboard",
    category: "economy",
    description: "Work your a** off",
    async run (client, message, args) {
      let money = db.fetch(`money_${user.id}`)
      if(money = null) money = 0
    }
}