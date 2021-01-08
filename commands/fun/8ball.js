const Discord = require('discord.js')
const { COLOR } = require('../../config.json')

module.exports = {
  name: "8ball",
  aliases: [""],
  category: "fun",
  usage: "8ball <question>",
  run: async (client, message, args) => {
    let answer = ["Yes", "No", "Maybe","Undefined"]
    if(!args.slice(0).join(" ")) return message.channel.send("Where is the question?")
    
    let ranswer = Math.floor((Math.random() + answer.length))
    
    let Embed = new Discord.MessageEmbed()
    .setColor(COLOR)
    .setTitle("Your question", args.slice(1).join(" "), "Answer", `${answer[ranswer]}`)
    message.channel.send(Embed)
  }
}