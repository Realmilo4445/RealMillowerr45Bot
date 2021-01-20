
const Discord = require('discord.js');

module.exports = {
    name: "store",
  category: "economy",
    description: "View the store",

    run: async (client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`**(🚗)Car** - **500** Moneys \n **(⏰)Watch** - **250** Moneys \n **(🎁)Lootbox** - **300** Moneys`)
        .setTimestamp();
        let rct = message.react(`➡`)
        let msg = message.channel.send(embed)
        
        if(rct) {
        let s = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`**(💍)Ring** - **500** Moneys \n **(⏰)Watch** - **250** Moneys \n **(🎁)Lootbox** - **300** Moneys`)
        .setTimestamp();
        msg.edit(s)
          }
      }
}