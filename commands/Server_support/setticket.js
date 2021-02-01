const Discord = require('discord.js')
const db = require("")

module.exports = {
    name: 'endticket',
    description: "ends the ticket",
    execute(client, message, args){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("(:x:)Only a moderator can set a ticket!")

        if(message.member.hasPermission("ADMINISTRATOR")) message.channnel.delete()
      
      let say = args.join(" ")
      if(!say)return message.channel.send("(:x:)Please type valid question for ticket!")
      
    }

}