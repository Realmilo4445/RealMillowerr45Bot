
module.exports = {
  name: "eject",
  category: "fun",
  description: "eject",
  usage: "eject <@user>",
  run: (client, message, args) => {
    
    message.channel.send(`**${message.mentions.users.first().username}** was ejected`)
    
  }
}