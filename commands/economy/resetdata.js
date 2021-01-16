const db = require('quick.db');
const ms = require('ms')
const Discord = require('discord.js');
const { COLOR } = require('../.././config.json')

module.exports = {
    name: "bal",
  category: "economy",
    description: "Your balance",

    async run (client, message, args) {
let Embed = new Discord.MessageEmbed()
        
        Embed.setColor(COLOR)
        Embed.setDescription(`**Reset Data...**`)
        Embed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        let msg = message.channel.send(Embed)
        let time = '5s'
        
    }
}
