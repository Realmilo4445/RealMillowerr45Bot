const { tictactoe } = require('reconlx')
const Discord = require('discord.js')

module.exports = {
    name : 'tictactoe',
  usage: 'tactactoe <mention>',
  category: 'info',
    run : async(client, message, args) => {
        const member = message.mentions.members.first() 
        let embed = new Discord.MessageEmbed()
        .setAuthor('Please specify a me')
            if(!member)  return  message.channel.send('Please specify a member')
        
        new tictactoe({
            player_two: member, 
            message: message
        })
    }
}