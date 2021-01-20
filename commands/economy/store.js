
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
      let msg = await message.channel.send(embed)
        
        await msg.react(nextPageEmoji)
        await msg.react(nextPreviousEmoji)
        await msg.awaitReactions((reaction, user) => user.id == user.id && (reaction.emoji.name == nextPreviousEmoji||reaction.emoji.name == nextPageEmoji),{max: 1, max:10000})
        .then(async collected => {
          let s = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`**(💍)Ring** - **500** Moneys \n **(⏰)Watch** - **250** Moneys \n **(🎁)Lootbox** - **300** Moneys`)
        .setTimestamp();
          if(collected.first().emoji.name == nextPageEmoji){ return msg.edit(s) }
          if(collected.first().emoji.name == nextPreviousEmoji){ return msg.edit(embed) }
          else return message.channel.send('error')
        }).catch(async () => { return message.channel.send('error')})
      }
    }