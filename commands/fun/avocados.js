const { Message, MessageEmbed } = require("discord.js");
const db = require('quick.db');
const ms = require('ms')
let amount = 150;
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
const answers = [
  `**Mexico**`,
  `**Indian**`,
  `**Indonesian**`,
  `**American**`,
  `**New Zealand**`
];
    let chosenAnswer = answers[Math.floor(Math.random() * answers.length)];
    let msg = await message.channel.send(`Avocados from **${chosenAnswer}**!`)
    let time = '5s'
    setTimeout(function(){
      db.add(`money_${message.guild.id}_${user.id}`, amount)
    msg.edit(`Congrats you got 500 Moneys from **${chosenAnswer}**!`)
    }, ms (time))
    //Create an instance of the UtilityEmbeds class
    embed.setDescription(msg)
    embed.setFooter(message.author.displayAvatarURL({ dynamic : true }), message.author.tag);
    message.channel.send(embed);
  },
};