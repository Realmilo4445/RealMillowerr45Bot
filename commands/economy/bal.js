const db = require('quick.db');
const Discord = require('discord.js');
const { COLOR } = require('../.././config.json')

module.exports = {
    name: "bal",
  category: "economy",
    description: "Your balance",

    async run (client, message, args) {
let Embed = new Discord.MessageEmbed()
        let user = message.mentions.users.first() || message.author;

        let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
        if(bal === null) bal = 0;
      Embed.setColor(COLOR)
        Embed.setDescription(`${bal} Moneys`)
      Embed.setFooter(`${message.author.tag}`)
        message.channel.send(Embed)
    }
}
