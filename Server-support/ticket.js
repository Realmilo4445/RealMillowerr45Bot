const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "ticket",
  caregory: "support_server",
  description: "Make a support ticket role",
  run: async(client, message, args) => {
    const reason = args.join(" ")
    
    ticket.makeTicket(message, reason)
  }
}