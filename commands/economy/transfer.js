const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
let Embed = new Discord.MessageEmbed()
module.exports = {

    name: 'transfer',

  usage: 'transfer <mention> <number>',
aliases: ["trans"],
    category: "economy",

    description: "transfered to user",

   run: async(client, message, args) => {
let  e = db.fetch(`money_${message.author.id}`)
let user = message.mentions.users.first().username
if(!user) return message.channel.send("Please mention people for transfer!")

        if(message.content.includes('-')) return message.reply("(:x:)Please !");

 

        if(e > 100) return message.reply("(:x:)You can't transfer more than 100 moneys!");

        

        if(e < 1) return message.reply("(:x:)You dont have money to transfer!");

let embed = new Discord.MessageEmbed()
embed.setDescription(`Successfully transfered ${args} money(s) to ${user}!`)

message.channel.send(embed)

 
}
 }