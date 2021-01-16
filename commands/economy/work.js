const db = require('quick.db');
const ms = require('parse-ms');
const { MessageEmbed } = require('discord.js')
const { COLOR } = require('../../config.json')
const works = [
  {
    title: `The Cake needs 100ML Milk you have 25ML, What ML you need?`,
    options: ["50", "15", "49"],
    work: `(👨‍🍳)Chef`,
    correct: 1,
    fail: `You suck at **(👨‍🍳)Chef** and you dont earn Money`,
    amount: 250,
  },
  
  {
    title: `right <---🏃‍---> left || Where goes Robbery?`,
    options: ["right", "middle", "left"],
    work: `(👮‍♂️)Policeman`,
    fail: `You suck at **(👮‍♂️)Policeman** Robbery has run`,
  }
             ]


module.exports = {
    name: "work",
    category: "economy",
    description: "Work your a** off",
    async run (client, message, args) {
    let q = works[Math.floor(Math.random() * works.length)];
    let i = 0;
    let user = message.author;
    const Embed = new MessageEmbed()
      .setTitle(q.title)
      .setDescription(
        q.options.map((opt) => {
          i++;
          return `${i} - ${opt}\n`;
        })
      )
      .setColor(`RED`)
      .setFooter(
        `Reply to this message with the correct question number! You have 15 seconds.`
      );
    let msg = message.channel.send(Embed);
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 15000, max: 1, errors: ["time"] }
      );
      if (parseInt(msgs.first().content) == q.correct) {
        let sembed = new MessageEmbed()
         db.add(`money_${message.guild.id}_${user.id}`, q.amount)
        db.set(`worked_${message.guild.id}_${user.id}`, Date.now())
        .setAuthor(`You great as **${q.works}** and earn **${q.amount}** Moneys`);
        sembed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        msg.edit(sembed)
      } else {
        let smbed = new MessageEmbed()
        .SetAuthor(`${q.fail}`);
        smbed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        msg.edit(smbed)
      }
    } catch (e) {
      let slmbed = new MessageEmbed()
        .SetAuthor(`${q.fail}`);
        slmbed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        msg.edit(slmbed)
      
    }
  },
};