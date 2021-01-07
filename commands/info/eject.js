const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "eject",
  description: "There is a big chance I insult you!",
  category: "fun",
  run: async (bot, message, args) => {
    let Embed = new MessageEmbed()
    let eject = message.content.slice();
      return message.channel.send(`You did not specify your question!`);
    else {
      let responses = [
        (` **${message.mentions.users.first().username}** Was an impostor`),
        (` **${message.mentions.users.first().username}** Was an impostor`),
        (` **${message.mentions.users.first().username}** Was ejected`)
      ];
      let response =
        responses[Math.floor(Math.random())];
      let Embed = new MessageEmbed()
        .setDescription(`${response}`)
        .setColor(`RED`);
      message.channel.send(Embed);
    }
  },
};