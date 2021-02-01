const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
  name: "close",
  caregory: "server_support",
  description: "Close support ticket role",
  run: async(client, message, args) => {
    const channel = message.mentions.channels.first() || message.guild.channels.cache.find(c => c.id == args || c.name == args) || message.channel
 
    ticket.closeTicket(message, channel)
  }
}