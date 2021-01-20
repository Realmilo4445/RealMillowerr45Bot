
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
      
      let s = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`**(💍)Ring** - **500** Moneys \n **(⏰)Watch** - **250** Moneys \n **(🎁)Lootbox** - **300** Moneys`)
        .setTimestamp();
        await msg.edit(s)
        let msg = message.channel.send(embed)
        await msg.react(nextPageEmoji)
        await msg.react(nextPreviousEmoji)
        await msg.awaitReactions((reaction, user) => user.id == user.id && (reaction.emoji.name == nextPageEmoji||reaction.emoji.name == nextPreviousEmoji),{max: 1, time: 10000})
        .then(async collected => {
          if(collected.first().emoji.name == nextPageEmoji)
        }).catch(async () {return message.channel.send("")})
          }
      }