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
     let es = args.join(" ")
     let em = new Discord.MessageEmbed()
     .setDescription(`<:Cross:618736602901905418> You dont have money to transfer`)
     let lembed = new Discord.MessageEmbed()
     .setDescription(`<:Cross:618736602901905418> Please mention peopple to transfer money!`)
let given = db.fetch(`money_${message.guild.id}_${message.author.id}`)
let user = message.mentions.users.first()
if(!user) return message.channel.send(lembed)
if(given < 0) return message.channel.send(em)
let embed = new Discord.MessageEmbed()
embed.setDescription(`Successfully transfered **${es}** money(s) to **${user}**!`)
db.add(`money_${message.guild.id}_${message.mentions.users.first().username.id}`, es)
db.subtract(`money_${message.guild.id}_${message.author.id}`, es)
 message.channel.send(embed)

 
}
 }