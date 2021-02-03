const db = require("quick.db")
const {MessageEmbed} = require('discord.js')

module.exports = {
  name: "delcmd",
  usage: "delcmd <cmd_name>",
  description: "Delete the custom commannd",
  category: "moderation",
  run: (client, message, args) => {

    let cmdname = args[0]
let embed = new MessageEmbed()
.setAuthor(`(❌)Gimme command name, 'delcmd <cmd_name>'`)
.setColor(`GREEN`)
.setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))

let sembed = new MessageEmbed()
.setAuthor(`(❌)Unable to find this command.`)
.setColor(`GREEN`)
.setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
    if(!cmdname) return message.channel.send(embed)

    let database = db.get(`cmd_${message.guild.id}`)

    if(database) {
      let data = database.find(x => x.name === cmdname.toLowerCase())

      if(!data) return message.channel.send(sembed)

      let value = database.indexOf(data)
      delete database[value]

      var filter = database.filter(x => {
        return x != null && x != ''
      })

      db.set(`cmd_${message.guild.id}`, filter)
      let g = new MessageEmbed()
      .setAuthor(`Deleted the ${cmdname} Command!`)
      .setColor(`GREEN`)
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      return message.channel.send(g)


    } else {
      return message.channel.send(":x: Sorry but i am unable to find that command!")
    


  }
  }
}