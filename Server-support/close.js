const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "close",
  caregory: "support_server",
  description: "Set support ticket role",
  run: async(client, message, args) => {
    const channel = message.mentions.channel.first()||message.channel
    
    ticket.setRole(message, channel)
  }
}