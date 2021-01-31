const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
let Embed = new Discord.MessageEmbed()
module.exports = {

    name: 'addmoney',

  usage: 'addmoney <number>',
aliases: ["am"],
    category: "moderation",

    description: "add money",

   run: async(client, message, args) => {
let  e = args.join(" ")
let user = message.author || message.mentions.users.first().username
if(!message.member.hasPermission("ADMINISTRATOR")) { return message.channel.send('(:x:)You are dont have permission to use this command!') }
        if (!args[0]) return message.reply("(:x:)Please enter the amount of moneys to add!");

 

        if(isNaN(args[0])) return message.reply("(:x:)Please type a real number!");

 

        if(args[0] > 100) return message.reply("(:x:)You can't add more than 100 moneys!");

        

        if(args[0] < 1) return message.reply("(:x:)You have to add at least one money!");

 let timeout = 88484;
      

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);
Embed.setColor(`GREEN`)
        if(daily !== null && timeout - (Date.now() - daily) > 0){
            let time = ms(timeout - (Date.now() - daily));
          Embed.setAuthor(`(❌)You've already add your money. Come back in ${time.days}d, ${time.hours}h, ${time.minutes}m, and ${time.seconds}s`)
            return message.channel.send(Embed)
        } else {
let embed = new Discord.MessageEmbed()
db.set(`daily_${message.guild.id}_${user.id}`, Date.now())
db.add(`money_${message.guild.id}_${user.id}`, args)
embed.setDescription(`Successfully added ${args} money(s) to ${user}!`)
     embed.setColor(`GREEN`)

message.channel.send(embed)

 
}
 }

}   