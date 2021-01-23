//requiring the package
const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'afk',
    category: 'main',
  usage: 'afk <reason>',
    run : async(client, message, args) => {
        const content = args.join(" ")
        await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
        const embed = new MessageEmbed()
        .setDescription(`You have been set to afk\n**Reason :** ${content}`)
        .setColor("DARK BLUE")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        message.channel.send(embed)                
    }
}