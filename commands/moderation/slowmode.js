const Discord = require('discord.js');
const { DEFAULT_PREFIX, Token} = require('../../config.json');

module.exports = {
  name: "slowmode",
  category: "moderation",
  description: "Change slowmode",
  run: async(client, message, args) => {
  
    if(!args[1])return message.channel.send("You need to provide how long to set slowmode!")
    if(isNaN(parseInt(args[1])))return message.channel.send("That is not a number.")
    
    emb
    
    message.channel.setRateLimitPerUser(args[1])
    message.channel.send(`The slowmode of this channel has been set to **${args[1]}**`)
}
}