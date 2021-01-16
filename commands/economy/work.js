const db = require('quick.db');
const ms = require('parse-ms');
const { MessageEmbed } = require('discord.js')
const { COLOR } = require('../../config.json')
const works = [
  {
    title: `The Cake needs 100ML Milk you have 25ML, What ML you need?`,
    options: ["25", "50", "49"],
    work: `(👨‍🍳)Chef`,
    correct: 2,
    fail: `You suck at **(👨‍🍳)Chef** and you dont earn Money`,
    amount: 250,
  },
  
  {
    title: `right <---🏃‍---> left || Where ways goes Robbery?`,
    options: ["Robbery goes right ways", "Robbery goes middle ways", "Robbery goes left ways"],
    correct: 1,
    work: `(👮‍♂️)Policeman`,
    fail: `You suck at **(👮‍♂️)Policeman** Robbery has run`,
    amount: 150,
  },
  
  {
    title: `Airplane in middle ways, Airplane goes to Miami, Wheres the right ways goes to Miami? Tips: Miami on left ways`,
    options: ["right", "middle", "left"],
    fail: `You suck at **(👨‍✈️)Pilot** and Airplane crashed yo`,
    correct: 3,
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