const Discord = require('discord.js')

module.exports = {
  name: "8ball",
  aliases: [""],
  category: "fun",
  usage: "8ball <question>",
  run: async (client, message, args) => {
    let answer = ["Yes", "No", "Maybe"]
    if(!args.slice(0).join())
  }
}