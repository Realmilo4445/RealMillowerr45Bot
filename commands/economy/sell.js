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
  if(say === 'setPrice') {
    if (!say === 'setPrice') return message.channel.send("please setPrice!")
    const combine = args.join(" ")
    
  }
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