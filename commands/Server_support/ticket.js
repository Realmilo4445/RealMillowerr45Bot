const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
  name: "ticket",
  caregory: "server_support",
  description: "Make a support ticket role",
  run: async(client, message, args) => {
    const reason = args.join(" ")
    
    ticket.makeTicket(message, reason, "swrf")
  }
}