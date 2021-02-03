const { MessageEmbed } = require('discord.js')
const db = require("quick.db")
const { DEFAULT_PREFIX } = require("../../config.json")

module.exports = {
  name: "prefix",
  category: "moderation",
  usage: "prefix <new-prefix>",
  description: "Change the prefix",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) { return message.channel.send("(❌)You are not allowed or do not have permission to change prefix")    
    
   if(!args[0]) {
      let a = new MessageEmbed()
      .setAuthor("Please give the prefix that you want to set")
      .setColor
      return message.channel.send("Please give the prefix that you want to set")
    }
    
     if(args[1]) {
      return message.channel.send("You can not set prefix a double argument")
    }
    
     if(args.join("") === DEFAULT_PREFIX) {
      db.delete(`prefix_${message.guild.id}`)
     return await message.channel.send("Reseted Prefix ✅")
    }
    
        db.set(`prefix_${message.guild.id}`, args[0])
  await message.channel.send(`Seted Bot Prefix to ${args[0]}`)

  }
}