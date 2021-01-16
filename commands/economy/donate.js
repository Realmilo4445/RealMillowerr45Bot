const { Message, MessageEmbed } = require("discord.js");
const db = require('quick.db');
const ms = require('ms')
let amount = Math.floor(Math.random() * 80) + 5
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
  `**New Zealand**`,
  `**Brazil**`,
  `**Brunei**`,
  `**United Kingdom**`
];
    let chosenAnswer = answers[Math.floor(Math.random() * answers.length)];
      const Embed = new MessageEmbed();
      const smbed = new MessageEmbed();
      Embed.setDescription(`Send donate to **${chosenAnswer}**!`)
      Embed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }));
      let msg = await message.channel.send(Embed)
      let time = "5s"
      setTimeout(function(){
      const embed = new MessageEmbed()
    embed.setDescription(`Congrats you got donate **${amount}** Moneys from **${chosenAnswer}**!`);
    db.add(`money_${message.guild.id}_${user.id}`, amount)
    embed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }));
    msg.edit(embed)
    }, ms (time))
    //Create an instance of the UtilityEmbeds class
  },
};