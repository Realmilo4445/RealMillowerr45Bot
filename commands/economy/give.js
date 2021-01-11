const db = require('quick.db');
const Discord = require('discord.js');
const { COLOR } = require('../.././config.json')
const ms = require('ms')

module.exports = {
    name: "rob",
    category: "economy",
    description: "rob everyone",
    usage: "rob <mention>",
    run: async (client, message, args) => {
    let Embed = new Discord.MessageEmbed()
        const profiles= new db,
        Embed.setDescription(`Added **$`)
        Embed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        message.channel.send(Embed)
    }
}