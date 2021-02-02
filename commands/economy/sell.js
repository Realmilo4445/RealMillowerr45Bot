const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  name: 'sell',
  category: 'economy',
  usage: 'sell <item> <price>',
  description: 'sell your item!',
  run: async(client, message, args) => {
    const price = args.join(" ")
    let say = args.join(" ")
    let items = await db.fetch(message.author.id)
    if(items === null) items = "Nothing"
    if(!items === null) return message.channel.send("You dont have item to sell!")
        if (!price[0]) return message.reply("Please enter the amount of item price to sell!");
 
        if(isNaN(price[0])) return message.reply("Please type a real number!");
 
        if(price[0] > 100) return message.reply("You can't sell more than 100 moneys item price!");
        
        if(price[0] < 1) return message.reply("You have to sell at least one money item price!")
    
    if(say === {items} + {price}) {
      let embed = new Discord.MessageEmbed()
      .setAuthor(`Succesfully sell your item`)
      .setDescription(items + price)
      .set
      db.subract(items)
      let msg = await message.channel.send(embed)
      
    }
  }
}