
const Discord = require('discord.js');
const nextPageEmoji = "➡"
module.exports = {
    name: "store",
  category: "economy",
    description: "View the store",

    run: async (client, message, args) => {
let msg = await message.send({embed});
        const embed = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`**(🚗)Car** - **500** Moneys \n **(⏰)Watch** - **250** Moneys \n **(🎁)Lootbox** - **300** Moneys`)
        .setTimestamp();
        await msg.addReaction(nextPageEmoji);
        let mesg = await message.channel.send(embed)

        let s = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`**(💍)Ring** - **500** Moneys \n **(⏰)Watch** - **250** Moneys \n **(🎁)Lootbox** - **300** Moneys`)
        .setTimestamp();
        mesg.edit(s)
          }
      }