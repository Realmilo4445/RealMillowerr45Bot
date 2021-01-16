const db = require('quick.db');
const ms = require('parse-ms');
const { MessageEmbed } = require('discord.js')
const { COLOR } = require('../../config.json')
const works = [
  {
    title: `The Cake needs 100ML Milk you have 25ML, What ML you need?`,
    options: ["50", "75", "49"],
    work: `(👨‍🍳)Chef`,
    correct: 2,
    fail: `You suck at (👨‍🍳)Chef and you dont earn Money`,
    amount: 250,
  },
  
  {
    title: `right <---🏃‍---> left || Where ways goes Robbery?`,
    options: ["Robbery goes right ways", "Robbery goes middle ways", "Robbery goes left ways"],
    correct: 1,
    work: `(👮‍♂️)Policeman`,
    fail: `You suck at (👮‍♂️)Policeman. Robbery has run`,
    amount: 150,
  },
  
  {
    title: `Airplane in middle ways, Airplane goes to Miami, Wheres the correct ways goes to Miami? Tips: Miami in left ways`,
    options: ["right", "middle", "left"],
    work: `(👨‍✈️)Pilot`,
    fail: `You suck at (👨‍✈️)Pilot and Airplane crashed you must pay this!`,
    correct: 3,
    amount: 550,
  },
  
  {
    title: `Pilot want to practice fyling the Airplane, Airplane goes to Land and Airplane needs to select right ways! where correct ways for Airplane goes to Land?`,
    options: ["middle", "right", "left"],
    work: `(✈️)Airplane flying practice`,
    fail: `You suck at (✈️)flying practice and Almost crushed but your friend help you`,
    correct: 2,
    amount: 500,
  },
  
  {
    title: `What is code : 34404 607`,
    options: ["BRUH", "LOL BOT", "AI BOT", "ERROR BOT"],
    work: `(👨‍💻)Progrmmer`,
    fail: `You suck at (👨‍💻)Progrmmer and you dont get money to hack the bank`,
    correct: 4,
    amount: 250,
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
        db.add(`money_${message.guild.id}_${user.id}`, q.amount)
        let sembed = new MessageEmbed()
        sembed.setColor(COLOR)
        sembed.setAuthor(`You great as ${q.work} and earn ${q.amount} Moneys`);
        sembed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        message.channel.send(sembed)
      } else {
        let selmbed = new MessageEmbed()
        selmbed.setColor(COLOR)
        .setAuthor(`${q.fail}`);
        selmbed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        message.channel.send(selmbed)
      }
    } catch (e) {
      let sellmbed = new MessageEmbed()
        sellmbed.setColor(COLOR)
        .setAuthor(`${q.fail}`);
        sellmbed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        message.channel.send(sellmbed)
    }
  },
};