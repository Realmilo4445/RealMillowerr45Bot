const weather = require('weather-js');
const discord = require('discord.js')

//TIME TO END STREAM
module.exports = {
  name: "weather",
  description: "Get the weather of anywhere",
  category: "info",
  usage: "weather <>",
  run: async(client, message, args) => {
    
    let es = new discord.MessageEmbed()
    .setAuthor(`(❌)Please give the weather location`)
    .setColor(`RED`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    
    let us = new discord.MessageEmbed()
    .setAuthor(`(❌)Unable To Get the data of Given Location`)
    .setColor(`RED`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    
    if(!args.length) {
      return message.channel.send(es)
    }
    
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
try {
let embed = new discord.MessageEmbed()
.setTitle(`Weather - ${result[0].location.name}`)
.setColor("#ff2050")
.setDescription("Temperature units can may be differ some time")
.addField("Temperature", `${result[0].current.temperature} Celcius`, true)
.addField("Sky Text", result[0].current.skytext, true)
.addField("Humidity", result[0].current.humidity, true)
.addField("Wind Speed", result[0].current.windspeed, true)//What about image
.addField("Observation Time", result[0].current.observationtime, true)
.addField("Wind Display", result[0].current.winddisplay, true)
.setThumbnail(result[0].current.imageUrl);
   message.channel.send(embed)
} catch(err) {
  return message.channel.send(us)
}
});   
    //LETS CHECK OUT PKG
    
  }
}