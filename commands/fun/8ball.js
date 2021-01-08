const { MessageEmbed } = require('discord.js')
const { COLOR } = require("../../config.json")

module.exports = {
  name: "8ball",
  category: "fun",
  description: "Randomly Answer",
  run: async(client, message, args) => {
  if(!args[2]) return message.reply("Please Ask Full Question!");
    let replies = ["Yes","No.","I Don't Know","Ask Again Later","Never -_-"];
    
    let result = Math.floor(Math.random() * replies.length);
    let question = args.slice(1).join(" ");
    
    let ballembed = new MessageEmbed()
    .setAuthor(message.author.tag)
    .setColor(COLOR)
    .addField("Question", question)
    .addField("Answer", replies[result]);
    
    message.channel.send(ballembed)
 }
}