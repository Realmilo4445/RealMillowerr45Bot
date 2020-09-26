const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "warning",
  category:"moderation",
  description: "warn all",
  run: async (client, message, args) => {
    
    const user = message.mentions.members.first() || message.author
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    
    
  }
}