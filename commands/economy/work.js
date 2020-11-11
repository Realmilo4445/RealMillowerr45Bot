const db = require('quick.db');
const ms = require('parse-ms');
const { MessageEmbed } = require('discord.js')


module.exports = {
    name: "work",
    category: "economy",
    description: "Work your a** off",
    async run (client, message, args) {
        let Embed = new MessageEmbed()
        Embed.setColor(COLOR)
        let user = message.author;
        let timeout = 600000;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            Embed.setAuthor(`You cannot work again for ${time.minutes}m and ${time.seconds}s`)
            message.channel.send(Embed)
        } else {
            let Embed = new MessageEmbed()
            Embed.setColor(COLOR)
            let amount = Math.floor(Math.random() * 80) + 1;
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())
            Embed.setAuthor(`you worked and earned ${amount} coins`)
            message.channel.send(Embed)
        }
    }
}
