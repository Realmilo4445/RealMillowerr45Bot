
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
      msg.awaitReactions((reaction, user) => user.id == user.id && (reaction.emoji.name == nextPageEmoji||reaction.emoji.name == nextPreviousEmoji )).then(async collected => {
			if(collectemoji.name===nextPageEmoji) {
				await msg.edit({s});
			}
			else if(emoji.name===nextPreviousEmoji){
				await msg.edit({embed});
			}
      })
                   }
                   }
                   