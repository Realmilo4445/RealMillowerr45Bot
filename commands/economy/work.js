const db = require('quick.db');
const ms = require('parse-ms');
const { MessageEmbed } = require('discord.js')
const { COLOR } = require('../../config.json')
const Chef = [
  `The soup needs 100ML you have 50ML, What ML you need?`,
]
 let quiz = Chef[Math.floor(Math.random() * Chef.length)];
const works = [
  {
    title: ``,
    work: `(👨‍🍳)Chef`
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
        return message.channel.send(`You got it correct! **${q.works}**`);
        
      } else {
        return message.channel.send(`You got it incorrect.`);
      }
    } catch (e) {
      return message.channel.send(`You did not answer!`);
      
    }
  },
};