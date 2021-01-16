const { MessageEmbed } = require("discord.js");
let amount = Math.floor(Math.random() * 80) + 10
const db = require('quick.db');
const ms = require('ms')
let questions = [
  {
    title: "1 + 3 * 5",
    options: ["20", "15", "5", "35"],
    correct: 1,
  },
  {
    title: "12/2 + 45/2",
    options: ["34/2", "57/4", "37/2", "24/5"],
    correct: 3,
  },
  
  {
    title: "How many planets on Space?",
    options: ["5", "9", "7", "2"],
    correct: 2,
  },
];
module.exports = {
  name: "quiz",
  description: "Test your knowledge!",
  category: "economy",
  run: async (bot, message, args) => {
    let q = questions[Math.floor(Math.random() * questions.length)];
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
        return message.channel.send(`You got it correct!`);
        
      } else {
        return message.channel.send(`You got it incorrect.`);
      }
    } catch (e) {
      return message.channel.send(`You did not answer!`);
      
    }
  },
};