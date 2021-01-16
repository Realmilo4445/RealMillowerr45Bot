const db = require('quick.db');
const ms = require('parse-ms');
const { MessageEmbed } = require('discord.js')
const { COLOR } = require('../../config.json')
const Chef = [
  `The Cake needs 100ML Milk you have 25ML, What ML you need?`,
]
 let quiz = Chef[Math.floor(Math.random() * Chef.length)];
const works = [
  {
    title: ``,
    options: ["50", "15", "49"],
    work: `(👨‍🍳)Chef`,
    correct: 1,
    fail: `You suck at **Chef** and you dont earn Money`,
    amount: 250,
  },
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
      .setColor(`GREEN`)
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
        return message.channel.send(`You great as **${q.works}** and earn **${q.amount}** Moneys`);
        msg.edit(sembed)
      } else {
        let smbed = new
        return message.channel.send(`${q.fail}`);
        msg.edit(smbed)
      }
    } catch (e) {
      return message.channel.send(`You did not answer!`);
      
    }
  },
};