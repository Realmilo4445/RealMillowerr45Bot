const db = require('quick.db');
const ms = require('parse-ms');
const { MessageEmbed } = require('discord.js')
const { COLOR } = require('../../config.json')
const work = [
              (`(👩‍🍳)Chef`),
              (`(👮‍♂️)Policeman`),
              (`(👨‍🌾)Farmer`),
              (`(👨‍⚕️)Doctor`),
              (`(👨‍💻)Programmer`),
              (`(👷‍♂️)Builder`),
              (`(👨‍🏫)Teacher`),
              (`(👨‍🎨)Artist`),
              (`(👨‍🚀)Astronaut`),
              (`(👨‍✈️)Pilot`),
              (`(🤵)Waiter`),
              (`(👨‍⚖️)Judgeman`),
              (`(👨‍🔬)Scientist`),
              (`(👨‍🏭)Factory Worker`),
              (`(👨‍🚒)Fire Fighter`)
             ]


module.exports = {
    name: "work",
    category: "economy",
    description: "Work your a** off",
    async run (client, message, args) {
        let Embed = new MessageEmbed()
        .setColor(COLOR)
        let user = message.author;
        let timeout = 60000;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);
        

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            Embed.setAuthor(`You cannot work again for ${time.minutes}m and ${time.seconds}s`)
            return message.channel.send(Embed)
        } else {
            let Embed = new MessageEmbed()
            .setColor(COLOR)
            let amount = Math.floor(Math.random() * 80) + 1;
          let works = work[Math.floor(Math.random() * work.length)];
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())
            Embed.setDescription(`you worked as **${works}** and earned **${amount}** Money(s)`)
          Embed.setFooter(`${message.author.tag}`)
            message.channel.send(Embed)
        }
    }
}
