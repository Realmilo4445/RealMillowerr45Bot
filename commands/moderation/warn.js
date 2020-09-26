const { MessageEmbed } = 

module.exports = {
  name:"warn",
  description: "warn sll",
  run: async (client, message, args) => {
    
if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You should have admin perms to use this command!")
    }
    
    const user = message.mentions.members.first()
    
     if(!user) {
      return message.channel.send("Please Mention the person to who you want to warn - warn @mention <reaosn>")
    }
}
}