const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {

    name: 'addmoney',

  usage: 'addmoney <number>',
aliases: ["am"],
    category: "moderation",

    description: "add money",

   run: async(client, message, args) => {
let  e = args.join(" ")
let user = message.mentions.users.first() || message.author
if(!message.member.hasPermission("ADMINISTRATOR")) { return message.channel.send('You are dont have permission to use this command!') }
        if (!args[0]) return message.reply("Please enter the amount of moneys to add!");

 

        if(isNaN(args[0])) return message.reply("Please type a real number!");

 

        if(args[0] > 100) return message.reply("You can't add more than 100 moneys!");

        

        if(args[0] < 1) return message.reply("You have to add at least one money!");

 
let embed = new Discord.MessageEmbed()
db.add(`money_${message.guild.id}_${user.id}`, args)
embed.setAuthor(`Successfully added ${args} money(s) to ${user}!`)
message.channel.send(embed)

 

 }

}   