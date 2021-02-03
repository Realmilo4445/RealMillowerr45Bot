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
     let es = args[1]
let given = db.fetch(`money_${message.author.id}`)
let user = message.mentions.users.first().username
if(!user) return message.channel.send("Please mention people for transfer!")

        if(given < 0) return message.reply("(:x:)You dont have money to transfer!");

let embed = new Discord.MessageEmbed()
embed.setDescription(`Successfully transfered ${es} money(s) to ${user}!`)
db.add(`money_${user.id}`,es)
db.subtract(`money_${message.author.id}`, es)
 message.channel.send(embed)

 
}
 }