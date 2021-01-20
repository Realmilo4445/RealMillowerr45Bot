const Discord = require('discord.js');

module.exports = {
    name: "store",
  category: "economy",
    description: "View the store",

    async run (client, message, args) {

        const embed = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`**(🚗)Car** - **500** Moneys \n **(⏰)Watch** - **250** Moneys`)
        .setTimestamp();

        let msg = message.channel.send(embed);
    }
}