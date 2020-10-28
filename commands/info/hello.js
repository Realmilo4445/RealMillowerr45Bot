const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../.././config.json")

module.exports = {
    name: "hello",
    category: "info",
    description: "Returns latency and API hello",
    usage: "hello",
    run: async (client, message, args) => {
      
    let embed = new MessageEmbed()
    .setColor(COLOR)
      
    if(!args.length) {
      embed.setAuthor("Hi!")
       message.channel.send(embed)
    }
    }
}