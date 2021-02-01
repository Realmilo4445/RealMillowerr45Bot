//This is the ticket.js file for my command handler

const Discord = require('discord.js')


module.exports = {
    name: 'ticket',
    usage: 'ticket',
    category: 'server_support',
    aliases: ["t"],
    description: "opens a server support ticket",
    run: async(client, message, args)=>{
        const user = message.author.id;
        const name = "ticket-" + user;
        if(message.guild.channels.cache.find(ch => ch.name == name)){
            message.channel.send("(:x:)You have already opened a ticket")
        }else{
    message.guild.channels.create(name).then((chan)=>{
    chan.updateOverwrite(message.guild.roles.everyone, {
        SEND_MESSAGES: false,
        VIEW_CHANNEL: false
    })
    chan.updateOverwrite(user,{
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true
    })
    const embed = new Discord.MessageEmbed()
    .setColor(`BROWN`)
    .setAuthor("(✅)I have created a ticket for you")
    message.channel.send(embed);
    const E = new Discord.MessageEmbed()
    .setAuthor("Say Anything What Do You Want?").setColor(`BROWN`)
    chan.send(E).then((m)=>{
        m.pin()
    })
    })   

     }
    }
}