
const Discord = require('discord.js');

module.exports = {
    name: "store",
  category: "intelligent",
    description: "View the store",

    async run (client, message, args) {

        const embed = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`Car - 500 coins \n Watch - 250 coins`)
        .setTimestamp();

        message.channel.send(embed);
    }
}