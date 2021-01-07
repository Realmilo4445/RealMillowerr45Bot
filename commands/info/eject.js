const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "8ball",
  description: "There is a big chance I insult you!",
  category: "fun",
  run: async (bot, message, args) => {
    let Embed = new MessageEmbed()
    let question = message.content.slice(bot.prefix.length + 6);
    if (!question)
      return message.channel.send(`You did not specify your question!`);
    else {
      let responses = [
        Embed.SetTitle(` **${message.mentions.users.first().username}** Was an impostor`),
        Embed.SetTitle(` **${message.mentions.users.first().username}** Was an impostor`),
        Embed.SetTitle(` **${message.mentions.users.first().username}** Was ejected`)
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`8Ball!`)
        .setDescription(`Your question: ${question}\nMy reply: ${response}`)
        .setColor(`RED`);
      message.channel.send(Embed);
    }
  },
};