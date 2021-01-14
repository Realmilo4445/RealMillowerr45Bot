const { Message, MessageEmbed } = require("discord.js");
const db = require('quick.db');
const ms = require('ms')
let amount = 500;
module.exports = {
  name: "avocados",
  description: "This command gives a response from the avocados",
  category: "fun",

  //IntelliSense
  /**
   * @param {Message} message
   * @param {String[]} args
   */

  run: async (client, message, args) => {
    const embed = new MessageEmbed();
    let user = message.author;
    let Mexico = `**Mexico**`
    let msg = embed.description(`Avocados from **${chosenAnswer}**`)
    let time = '4s';
     let chosenAnswer = answers[Math.floor(Math.random() * answers.length)];
const answers = [
  Mexico,
  `**Indian**`,
  `**Indonesian**`,
  `**American**`,
  `**New Zealand**`
];
    //Create an instance of the UtilityEmbeds class;
    setTimeout(function(){
      if(Mexico) {
     db.add(`money_${message.guild.id}_${user.id}`, amount);
     db.set(`daily_${message.guild.id}_${user.id}`, Date.now())
     msg.edit(`Congrats you got **500** Moneys from` `**Mexico!**`)
    }
    }, ms(time))
    
    embed.setFooter(message.author.displayAvatarURL({ dynamic : true }) `${message.author.tag}`);
    message.channel.send(embed);
  },
};