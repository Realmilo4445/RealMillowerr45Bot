const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {

    name: 'addmoney',

  usage: 'clear <number>',
aliases: ["am"],
    category: "moderation",

    description: "Clear messages!",

   run: async(client, message, args) => {
let  e = args.join(" ")
let user = message.mentions.users.first() || message.author
        if (!e[0]) return message.reply("Please enter the amount of moneys to add!");

 

        if(isNaN(e[0])) return message.reply("Please type a real number!");

 

        if(e[0] > 100) return message.reply("You can't add more than 100 moneys!");

        

        if(e[0] < 1) return message.reply("You have to add at least one money!");

 
let embed = new Discord.MessageEmbed()
db.add(`money_${message.guild.id}`)
.setAuthor(`Successfully added ${e} money(s) to ${user}!`)
message.channel.send(embed)

 

 }

}   