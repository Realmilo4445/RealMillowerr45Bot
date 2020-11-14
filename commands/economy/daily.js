const { MessageEmbed } = require('discord.js')
const { COLOR } = require('../../config.json')
const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "daily",
    category: "economy",
    description: "Receive a daily award of money",
    async run (client, message, args) {
      let Embed = new MessageEmbed()
      .setColor(COLOR)
        let user = message.author;
        let timeout = 86400000;
        let amount = 500;

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily) > 0){
            let time = ms(timeout - (Date.now() - daily));
          Embed.setAuthor(`You've already collected your daily award. Come back in ${time.days}d, ${time.hours}h, ${time.minutes}m, and ${time.seconds}s`)
            return message.channel.send(Embed)
        } else {
            let Embed = new MessageEmbed()
            .setColor(COLOR)
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now());
            Embed.setAuthor(`Successfully added ${amount} coins to your account`)
            message.channel.send(Embed)
        }
    }
}