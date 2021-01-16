const db = require('quick.db');
const ms = require('ms')
const Discord = require('discord.js');
const { COLOR } = require('../.././config.json')

module.exports = {
    name: "resetdata",
  category: "economy",
    description: "Reset your balance",

    async run (client, message, args) {
let Embed = new Discord.MessageEmbed()
        
        Embed.setColor(COLOR)
        Embed.setDescription(`**Reset Data...**`)
        Embed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        let msg = await message.channel.send(Embed)
        let time = '3s'
        setTimeout(function(){
          Embed.setColor(COLOR)
        Embed.setDescription(`**Reset Data..**`)
        Embed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        }, ms (time))
        let times = '6s'
        setTimeout(function(){
          db.subtract(`money_${message.guild.id}_${message.author.id}`, 999999999);
          let sebed = new Discord.MessageEmbed()
          sebed.setColor(COLOR)
          sebed.setDescription(`**Success Reseting Your Data**`)
          sebed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
          msg.edit(sebed)
        }, ms (times))
    }
}
