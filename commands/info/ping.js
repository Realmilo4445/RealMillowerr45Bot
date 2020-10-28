const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../.././config.json")

module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency and API lol",
    usage: "ping",
    run: async (client, message, args) => {
      
      let embed = new MessageEmbed()
    .setColor(COLOR)
      
    if(!args.length) {
      embed.setAuthor(`Pong ${client.ws.ping}`)
       message.channel.send(embed)
    }
    }
  
}