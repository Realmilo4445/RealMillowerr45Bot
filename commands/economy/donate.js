const { Message, MessageEmbed } = require("discord.js");
const db = require('quick.db');
const ms = require('ms')
let amount = Math.floor(Math.random() * 80) + 10
module.exports = {
  name: "donate",
  description: "This command gives a response from the donate",
  category: "economy",

  //IntelliSense
  /**
   * @param {Message} message
   * @param {String[]} args
   */

  run: async (client, message, args) => {
    let user = message.author;
const answers = [
  `**Mexico**`,
  `**Indian**`,
  `**Indonesian**`,
  `**American**`,
  `**New Zealand**`
];
    let chosenAnswer = answers[Math.floor(Math.random() * answers.length)];
      const Embed = new MessageEmbed();
      db.add(`money_${message.guild.id}_${user.id}`, amount)
      Embed.setDescription(`Send donate to **${chosenAnswer}**!`)
    let time = "10s"
    setTimeout(function(){
      const embed = new MessageEmbed()
    embed.setDescription(`Congrats you got donate **${amount}** Moneys from **${chosenAnswer}**!`);
    embed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }));
    message.channel.send(embed)
    },ms (time))
    message.channel.send(Embed)
    //Create an instance of the UtilityEmbeds class
  },
};