
const Discord = require('discord.js');
const nextPageEmoji = "➡"
const nextPreviousEmoji = "⬅"
module.exports = {
    name: "store",
  category: "economy",
    description: "View the store",

    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`**(🚗)Car** - **500** Moneys \n **(⏰)Watch** - **250** Moneys \n **(🎁)Lootbox** - **300** Moneys`)
        .setTimestamp();
      let msg = await message.channel.send({embed})
        
        await msg.react(nextPageEmoji)
        await msg.react(nextPreviousEmoji)
          let s = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`**(💍)Ring** - **500** Moneys \n **(⏰)Watch** - **250** Moneys \n **(🎁)Lootbox** - **300** Moneys`)
        .setTimestamp();
      let filter = (emoji,userID) => (emoji.name===nextPageEmoji||emoji.name===nextPreviousEmoji)&&userID===msg.author.id;
		  let collector = message.reactionCollector(msg,filter,{time:900000,idle:120000});
      collector.on('collect', async function(emoji){
			if(emoji.name===nextPageEmoji) {
				await msg.edit({s});
			}
			else if(emoji.name===nextPreviousEmoji){
				await msg.edit({embed});
			}
      })
                   }
                   }
                   