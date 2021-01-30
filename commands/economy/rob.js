const db = require('quick.db');
const Discord = require('discord.js');
const { COLOR } = require('../.././config.json')
const ms = require('ms')

module.exports = {
    name: "rob",
   category: "economy",
    description: "rob everyone",
    usage: "rob <mention>",
    run: async (client, message, args) => {
let Embed = new Discord.MessageEmbed()
let embed = new Discord.MessageEmbed()
const users = message.mentions.members.first()
        let userd = message.mentions.users.first().username
        let rob = new Discord.MessageEmbed()
        .setAuthor(`(❌)Please mention anyone to rob!`)
        if(!users) return message.channel.send(rob)
        let amount = Math.floor(Math.random() * 80) + 5;
      if(message.author.id === users.id) {
        embed.setColor(COLOR)
        embed.setTitle(`**You cannot rob yourself**`)
        return message.channel.send(embed)
      }
      Embed.setColor(COLOR)
      let user = message.author;
        let timeout = 0;
        
        let author = await db.fetch(`robbed_${message.guild.id}_${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author))
            Embed.setAuthor(`You cannot rob again for ${time.minutes}m and ${time.seconds}s`)
            return message.channel.send(Embed)
        } else {
            let Embed = new Discord.MessageEmbed()
            let amount = Math.floor(Math.random() * 80) + 5;
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`robbed_${message.guild.id}_${user.id}`, Date.now())
          db.subtract(`money_${message.guild.id}_${userd}`, 50);
        Embed.setDescription(`You robbed **${userd}** and stole **${amount}** Money(s)`)
        Embed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        message.channel.send(Embed)
          db.add(`robbed_${message.guild.id}_${message.author.id}`, 1)
        }
    }
}