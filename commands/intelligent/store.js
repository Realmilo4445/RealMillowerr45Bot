
const Discord = require('discord.js');

module.exports = {
    name: "store",
  category: "intelligent",
    description: "View the store",

    async run (client, message, args) {

        const embed = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`**(🚗)Car** - **500** Moneys \n **(⏰)Watch** - **250** Moneys \n **(🎁)Lootbox** - **300** Moneys`)
        .setTimestamp();

        message.channel.send(embed);
    }
}