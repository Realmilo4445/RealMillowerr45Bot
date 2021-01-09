const db = require('quick.db');
const Discord = require('discord.js');
const { COLOR } = require('../.././config.json')
const ms = require('ms')

module.exports = {
    name: "beg",
  category: "economy",
    description: "",
    usage: "beg ",
    async run (client, message, args) {
let Embed = new Discord.MessageEmbed()
        let userd = message.members.username()
        let amount = Math.floor(Math.random() * 80) + 5;
      Embed.setColor(COLOR)
      let user = message.author;
        let timeout = 0;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);
        

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            Embed.setAuthor(`You cannot rob again for ${time.minutes}m and ${time.seconds}s`)
            return message.channel.send(Embed)
        } else {
            let Embed = new Discord.MessageEmbed()
            .setColor(COLOR)
            let amount = Math.floor(Math.random() * 80) + 5;
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())
        Embed.setDescription(`You robbed **${userd}** and stole **${amount}** Money(s)`)
      Embed.setFooter(`${message.author.tag}`)
        message.channel.send(Embed)
        }
    }
}