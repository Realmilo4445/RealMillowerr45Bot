const db = require("quick.db")
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "addcmd",
  usage: "addcmd <cmd_name> <cmd_responce>",
  description: "add guild custom commands",
  category: "moderation",
  run: async(client, message, args) => {

    

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("(:x:) You need `MANAGE_MESSAGES` perms to use this command")

    let cmdname = args[0]

    if(!cmdname) return message.channel.send(`(:x:) You have to give command name, \`addcmd <cmd_name> <cmd_responce>\``)

    let cmdresponce = args.slice(1).join(" ")

    if(!cmdresponce) return message.channel.send(`(:x:) You have to give command cmd responce, \`addcmd <cmd_name> <cmd_responce>\``)

    let database = db.get(`cmd_${message.guild.id}`)

    if(database && database.find(x => x.name === cmdname.toLowerCase())) return message.channel.send("(:x:) This command name is already added in guild custom commands.")

    let data = {
      name: cmdname.toLowerCase(),
      responce: cmdresponce
    }

    db.push(`cmd_${message.guild.id}`, data)
 let embed = new MessageEmbed()
 .setAuthor("Added " + cmdname.toLowerCase() + "as a custom command in guild.")
 .setColor(`GREEN`)
 .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
 .setTimestamp()
    return message.channel.send(embed)


  }
}