const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('ms')
module.exports = {
  name: 'sell',
  category: 'economy',
  usage: 'sell <item> <price>',
  description: 'sell your item!',
  run: async(client, message, args) => {
    let say = args.join(" ")
    let items = await db.fetch(message.author.id)
    if(items === null) items = "Nothing"
    if(!items === null) return message.channel.send("You dont have item to sell!")
    const combine = `${items} ${args}`
        if (!args[0]) return message.reply("Please enter the amount of item price to sell!");
 
        if(isNaN(args[0])) return message.reply("Please type a real number!");
 
        if(args[0] > 100) return message.reply("You can't sell more than 100 moneys item price!");
        
        if(args[0] < 1) return message.reply("You have to sell at least one money price!");
 
    if(say === combine) {
      let embed = new Discord.MessageEmbed()
      .setAuthor(`Succesfully sell your item`)
      .setDescription(`item: ${items} price: ${args}`)
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      .setTimestamp()
      db.subract(items)
      db.add(`money_${message.guild.id}_${message.author.id}`, args + 50)
      let msg = await message.channel.send(embed)
      let time = 5
      setTimeout(function(){
      let Embed = new Discord.MessageEmbed()
      .setAuthor(`Successfully selling your item and people buy your item`)
      .setDescription(`You got ${args} and extra 50 moneys`)
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      .setTimestamp()
      msg.edit(Embed)
      },ms (time))
    }
  }
}