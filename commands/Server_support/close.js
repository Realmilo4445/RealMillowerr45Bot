const Discord = require('discord.js')


module.exports = {
    name: 'close',
    category: 'server_support',
    usage: 'close',
    aliases: ["c"],
    description: "close the server support ticket",
    run: async(client, message, args)=>{

        message.channel.delete()
    }

}