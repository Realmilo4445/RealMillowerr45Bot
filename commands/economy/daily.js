const { MessageEmbed } = require('discord.js')
const { COLOR } = require('../../config.json')
const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "daily",
    category: "economy",
    usage: "daily",
    description: "Receive a daily award of money",
    async run (client, message, args) {
      let Embed = new MessageEmbed()
     
        let user = message.author;
        let timeout = 8640000;
        let amount = 500;

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily) > 0){
            let time = ms(timeout - (Date.now() - daily));
          Embed.setAuthor(`(❌)You've already collected your daily award. Come back in ${time.days}d, ${time.hours}h, ${time.minutes}m, and ${time.seconds}s`)
            return message.channel.send(Embed)
        } else {
            let Embed = new MessageEmbed()
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now());
            Embed.setAuthor(`Successfully added ${amount} Moneys to your account | Wow you get (🎁)Lootbox!`)
          db.push(message.author.id, "(💎)Diamond");
          Embed.setTitle(`Wow you get (💎)Diamond from (🎁)Lootbox!`)
          Embed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
            message.channel.send(Embed)
        }
    }
}