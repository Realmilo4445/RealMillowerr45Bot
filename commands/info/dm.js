const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "dm",
  usage: "dm <mention>",
  description: "DM a user in the guild",
  category: "info",
  run: async (client, message, args) => {
    let embed = new MessageEmbed()
    .setAuthor("(❌)You do not have enough permissions!")
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
     return message.channel.send(embed);
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    
     let erambed = new MessageEmbed()
    .setAuthor("You did not mention a user, or you gave an invalid id")
    
    if (!user)
      return message.channel.send(erambed);
    
    let ermbed = new MessageEmbed()
    .setAuthor("(❌)You did not specify your message!")
    
    let Ermbed = new MessageEmbed()
    .setAuthor("(❌)That user could not be DMed!")
    
    let sermbed = new MessageEmbed()
    .setAuthor(`Sent a message to ${user.user.tag}`)
    if (!args.slice(1).join(" "))
      return message.channel.send(ermbed);
    user.user
      .send(args.slice(1).join(" "))
      .catch(() => message.channel.send(Ermbed))
      .then(() => message.channel.send(sermbed));
  },
};