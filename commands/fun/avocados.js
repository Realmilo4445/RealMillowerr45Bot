const { Message, MessageEmbed } = require("discord.js");
const db = require('quick.db');

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
    const Embed = new MessageEmbed();
    let user = message.author;
    let Mexico = `**Mexico**`
const answers = [
  Mexico,
  `**Indian**`,
  `**Indonesian**`,
  `**American**`,
  `**New Zealand**`
];
    //Create an instance of the UtilityEmbeds class;
    if(Mexico) {
     db.add(`money_${message.guild.id}_${user.id}`, amount);
     db.set(`daily_${message.guild.id}_${user.id}`, Date.now());
      Embed.setAuthor(`Wow you get **500** Moneys from **Mexico**!`)
      message.channel.send(Embed)
    }
    const embed = new MessageEmbed();
    let chosenAnswer = answers[Math.floor(Math.random() * answers.length)];
    embed.setDescription(`Avocados from ${chosenAnswer}!`);
    embed.setFooter(message.author.displayAvatarURL({ dynamic : true }) `${message.author.tag}`);

    message.channel.send(embed);
  },
};