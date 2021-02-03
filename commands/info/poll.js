const Discord = require("discord.js");
module.exports = {
  name: "poll",
  description: "Create a simple yes or no poll",
  usage: "poll ",
  category: "moderation",
  run: async (client, message, args) => {
    let emb = new Discord.MessageEmbed()
    .setAuthor(`You dont have admin permission, ${message.author.username}`)
    .setColor(`RED`)
    let et = new Discord.
    let as = new Discord.MessageEmbed()
    .setAuthor(`You did not mention / give id of your channel! use !channel <channel> to show your channel id!`)
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send(
        emb
      );
    const channel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);
    if (!channel) {
      return message.channel.send(
        as
      );
    }
    let question = message.content
      .split(`${client.users.prefix}poll ${channel} `)
      .join("");
    if (!question)
      return message.channel.send(`You did not specify your question!`);
    const Embed = new Discord.MessageEmbed()
      .setTitle(`New poll!`)
      .setDescription(`${question}`)
      .setFooter(`${message.author.username} created this poll.`)
      .setColor(`RED`);
    let msg = await client.channels.cache.get(channel.id).send(Embed);
    await msg.react("👍");
    await msg.react("👎");
  },
};