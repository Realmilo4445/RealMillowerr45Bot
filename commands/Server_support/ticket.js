const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()
const Discord = require("discord.js")
module.exports = {
  name: "ticket",
  caregory: "server_support",
  description: "Make a support ticket role",
  run: async(client, message, args) => {
    ticket.makeTicket(message, args, "swrf")
  }
}