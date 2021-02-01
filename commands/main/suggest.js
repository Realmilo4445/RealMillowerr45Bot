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
    
   let msg = await channel.send(embed)
   
   let gembed = new MessageEmbed()
    .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("DARK BLUE")
    .setDescription("Accepted")
    .setTimestamp()
   
   let sembed = new MessageEmbed()
    .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("DARK BLUE")
    .setDescription("Denied")
    .setTimestamp()
   
      message.channel.send("Sended Your Suggestion to:" + channel)
msg.react('✅').then(() => msg.react('❌'))

const filter = (reaction, user) => {
	return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.member.id;
};

msg.awaitReactions(filter, { max: 90, time: 60000000000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		  if (reaction.emoji.name === '✅') {
			msg.edit(gembed)
		} if (reaction.emoji.name === '❌') {
			msg.edit(sembed)
    }
	})
    
    }
  }