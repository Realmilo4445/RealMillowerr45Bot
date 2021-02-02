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
    const combine = args.join(" ")
    let items = await db.fetch(message.author.id)
    if(items === null) items = "Nothing"
    if(!items === null) return message.channel.send("You dont have item to sell!")
  if(say === 'setPrice' + combine) {
    if (!say === 'setPrice') return message.channel.send("please setPrice!")
        if (!combine[0]) return message.reply("Please enter the amount of messages to clear!");
 
        if(isNaN(combine[0])) return message.reply("Please type a real number!");
 
        if(combine[0] > 100) return message.reply("You can't remove more than 100 messages!");
        
        if(combine[0] < 1) return message.reply("You have to delete at least one message!")
    
    return message
}
      let embed = new Discord.MessageEmbed()
      .setAuthor(`Succesfully sell your item`)
      .setF
      .setTimestamp()
      db.subract(items)
      db.add(`money_${message.guild.id}_${message.author.id}`, combine + 50)
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