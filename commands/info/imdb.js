const discord = require("discord.js");
const imdb = require("imdb-api");

module.exports = {
name: "imdb",
  description: "Get the information about series and movie",
  category: "info",
  usage: "imdb <name>",
  run: async (client, message, args, color) => {

    let es = new discord.MessageEmbed()
    es.setAuthor("(❌)Please give the name of movie or series")
    .setAuthor(`RED`)
     if(!args.length) {
      return message.channel.send(es)
    }
    
     const imob = new imdb.Client({apiKey: "5e36f0db"}) //You need to paste you imdb api
     
     let movie = await imob.get({'name': args.join(" ")})
    
     let embed = new discord.MessageEmbed()
    .setTitle(movie.title)
    .setColor("#ff2050")
    .setThumbnail(movie.poster)
    .setDescription(movie.plot)
    .setFooter(`Ratings: ${movie.rating}`)
    .addField("Country", movie.country, true)
    .addField("Languages", movie.languages, true)
    .addField("Type", movie.type, true);
    
    
    message.channel.send(embed)
     
}
    }