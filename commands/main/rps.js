const { Message, MessageEmbed } = require("discord.js");

const answers = [
  `Scissors`,
  `Rock`,
  `Paper`,
];

module.exports = {
  name: "rps",
  description: "This command gives a response from the rps",
  category: "main",

  //IntelliSense
  /**
   * @param {Message} message
   * @param {String[]} args
   */

  run: async (client, message, args) => {
    //Create an instance of the UtilityEmbeds class;

    const question = args.join(" ")

    if (!question) {
      return message.channel.send(
          "You did not provide your rps!",
          `Triggered by ${message.author.tag}`
      )
    }

    let chosenAnswer = answers[Math.floor(Math.random() * answers.length)];

    const embed = new MessageEmbed();
    embed.setAuthor("RPS!");
    embed.setTitle(`**You Choose:
${question}
I Choose: 
${chosenAnswer}**!`);
    embed.setColor(`DARK BLUE`)
    embed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }));

    message.channel.send(embed);
  },
};