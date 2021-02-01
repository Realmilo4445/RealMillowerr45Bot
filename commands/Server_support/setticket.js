const Discord = require('discord.js')
const db = require("quick.db")

module.exports = {
    name: 'setticket',
    aliases: ["s-ticket"],
    usage: "setticket <question>",
    category: "support_server",
    description: "set the server support ticket",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("(:x:)Only a moderator can set a ticket!")

        if(message.member.hasPermission("ADMINISTRATOR")) message.channnel.delete()
      
      let say = args.join(" ")
      if(!say)return message.channel.send("(:x:)Please type valid question for ticket!")
      let channel = message.guild.channels
    }

}