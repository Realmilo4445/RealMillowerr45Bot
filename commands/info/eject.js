const { Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "eject",
  description: "eject",
  category: "fun",
  usage: "eject <mention>",

  //IntelliSense
  /**
   * @param {Message} message
   * @param {String[]} args
   */

  run: async (client, message, args) => {
    const answers = [
      `**${message.mentions.users.first().username}** Was an impostor`,
      `**${message.mentions.users.first().username}** Was not an impostor`,
      `**${message.mentions.users.first().username}** Was ejected`
    ];
    //Create an instance of the UtilityEmbeds class;

    const question = message.content.slice(7);

    let ee = new MessageEmbed()
    ee.setAuthor("(❌)Please mention to want eject")
    .setColor(`RED`)
    if (!question) {
      return message.channel.send(ee);
    }

    let chosenAnswer = answers[Math.floor(Math.random() * answers.length)];

    const embed = new MessageEmbed();
    embed.setColor(`RED`)
    embed.setDescription(chosenAnswer);

    message.channel.send(embed);
  }
};
