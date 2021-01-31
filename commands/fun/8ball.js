const { Message, MessageEmbed } = require("discord.js");

const answers = [
  "It is certain.",
  "It is decidely so.",
  "Without a doubt.",
  "Yes, definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely",
  "Outlook good.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Never.",
  "Cannot predict now.",
  "Concentrate, and ask again.",
  "Don't count on it.",
  "No.",
  "Maybe.",
  "Outlook not so good.",
  "Yes.",
];

module.exports = {
  name: "8ball",
  description: "This command gives a response from the 8ball",
  category: "fun",

  //IntelliSense
  /**
   * @param {Message} message
   * @param {String[]} args
   */
  aliases: ["8b"],
  usage: "8ball <your question>",
  run: async (client, message, args) => {
    //Create an instance of the UtilityEmbeds class;

    const question = message.content.slice(7);
    const em = new MessageEmbed()
    em.setAuthor("(❌)You did not provide your question!")
    em.setColor("BLUE")
    em.setFooter(`Triggered by ${message.author.tag}`)
    if (!question) {
      return message.channel.send(em)
    }

    let chosenAnswer = answers[Math.floor(Math.random() * answers.length)];

    const embed = new MessageEmbed();
    embed.setTitle("🎱 8ball 🎱");
    embed.setColor(`BLUE`)
    embed.setDescription(chosenAnswer);
    embed.setFooter(`Requested by ${message.author.tag}`);

    message.channel.send(embed);
  },
};