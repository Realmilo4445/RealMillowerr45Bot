const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');


module.exports = {
    name:"uptime",
   category: "info",
   run: async(client,message,args)=>{
     let embed = new Discord.MessageEmbed()
     .setAuthor(`${ms(client.user.uptime)}`)
     message.channel.send(embed)
   }
}