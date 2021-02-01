const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "main",
  run: async(client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please Give the Suggestion")
    };
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"))
    
    
    if(!channel) {
      return message.channel.send("there is no channel with name - suggestions")
    };
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("DARK BLUE")
    .setDescription(args.join(" "))
    .setTimestamp()
    
   let msg = await message.channel.send(embed)
     .then(m => {
  
m.react('✅')
m.react('❌')
         return ['✅','❌'].icludes(reaction.emoji.name) && message.member.hasPermission("ADMINISTRATOR")
       
    

message.awaitReactions(filter, { max: 2, time: 6000000, errors: ['time'] })
	.then(collected => {
		con
    }
  }