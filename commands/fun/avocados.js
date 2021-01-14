const { Message, MessageEmbed } = require("discord.js");
const db = require('quick.db');

let amount = 500;
module.exports = {
  name: "8ball",
  description: "This command gives a response from the 8ball",
  category: "fun",

  //IntelliSense
  /**
   * @param {Message} message
   * @param {String[]} args
   */

  run: async (client, message, args) => {
    let user = message.author;
    let mexico = `"**`Mexico!**``
    
const answers = [
  mexico,
];
    //Create an instance of the UtilityEmbeds class;
    db.add(`money_${message.guild.id}_${user.id}`, amount);
db.set(`daily_${message.guild.id}_${user.id}`, Date.now());
    
    let chosenAnswer = answers[Math.floor(Math.random() * answers.length)];

    const embed = new MessageEmbed();
    embed.setDescription(`Avocados from ${chosenAnswer}`);
    embed.setFooter(`Requested by ${message.author.tag}`);

    message.channel.send(embed);
  },
};