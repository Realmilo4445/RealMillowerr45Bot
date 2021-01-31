const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
  name: "close",
  caregory: "server_support",
  description: "Set support ticket role",
  run: async(client, message, args) => {
    const channel = message.mentions.channel||message.channel
    
    ticket.closeTicket(message, channel)
  }
}