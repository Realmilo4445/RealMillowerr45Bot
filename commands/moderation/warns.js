const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "warns",
  category:"moderation",
  description: "warn all",
  run: async (client, message, args) => {
    
    const user = message.mentions.members.first() || message.author
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
     if(warnings === null) warnings = 0;
    
    let embed = new MessageEmbed()
    .setAuthor(`${user} have ${warnings} warning(s)`)
    .setColor(`GREEN`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
     message.channel.send(embed)
    
  }
}