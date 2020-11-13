const Discord = require('discord.js');;
const { MessageEmbed } = require('discord.js');
const { DEFAULT_PREFIX, token, COLOR} = require('../../config.json');

module.exports = {
  name: "slowmode",
  category: "moderation",
  description: "Change slowmode",
  run: async(client, message, args) => {
  
    if(!args[1])return message.channel.send("You need to provide how long to set slowmode!")
    if(isNaN(parseInt(args[1])))return message.channel.send("That is not a number.")
    
    let embed = new MessageEmbed()
    .setColor(COLOR)
    .setTitle(`The slowmode of this channel has been set to **${args[1]}**`)
    
    message.channel.setRateLimitPerUser(args[1])
    message.channel.send(embed)
}
}