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
let  e = args.join(" ")
let user = message.author || message.mentions.users.first().username
        if (!e[0]) return message.reply("(:x:)Please enter the amount of moneys to transfer!");

 

        if(isNaN(e[0])) return message.reply("(:x:)Please type a real number!");

 

        if(e[0] > 100) return message.reply("(:x:)You can't transfer more than 100 moneys!");

        

        if(e[0] < 1) return message.reply("(:x:)You have to transfer at least one money!");

 let timeout = 99990;
      

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);
        if(daily !== null && timeout - (Date.now() - daily) > 0){
            let time = ms(timeout - (Date.now() - daily));
          Embed.setAuthor(`(❌)You've already transfered. Come back in ${time.days}d, ${time.hours}h, ${time.minutes}m, and ${time.seconds}s`)
            return message.channel.send(Embed)
        } else {
let embed = new Discord.MessageEmbed()
db.set(`daily_${message.guild.id}_${user.id}`, Date.now())
db.add(`money_${message.guild.id}_${user.id}`, e)
db.subtract(`money_${message.guild.id}_${message.author.id}`, e)
embed.setDescription(`Successfully transfered ${args} money(s) to ${user}!`)

message.channel.send(embed)

 
}
 }

}   