const Discord = require('discord.js')

module.exports = {
  name: 'avatar',
  description: 'view user avatar',
  usage: 'avatar <@mention>',
  aliases: ['av'],
  run: async(client, message, args) = {
    let user = message.mentions.users.first()
  }
}