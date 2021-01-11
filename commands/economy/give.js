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
        const profiles = new db.table('profiles')
        
        const mntn = message.mentions.members.first()
        
        if(!mntn) return message.channel.send(`**You need to mention a member to give money to**`)
      
        const mtnmember = profiles.get(`profiles_${mntn.id}`)
        
        const msgmember = profiles.get(`profiles_${message.member.id}`)
        
        if(!mtnmember) return message.channel.send(`**This member doesn't have a profile**`)
        
        if(!msgmember) return message.channel.send(`**You don't have a profile**`)
      
        if(mtnmember.id === message.member.id) return message.channel.send(`**You can't give money to yourself**`)
      
        if(!args[1]) return message.channel.send(`****`)
        Embed.setDescription(`Added **$`)
        Embed.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        message.channel.send(Embed)
    }
}